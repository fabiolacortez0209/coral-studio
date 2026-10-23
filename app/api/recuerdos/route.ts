
import { NextResponse } from "next/server";
import { google } from "googleapis";
import { Readable } from "node:stream";

export const runtime = "nodejs";

const TIPOS_PERMITIDOS = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "video/mp4",
  "video/quicktime",
  "video/webm",
];

const TAMANO_MAXIMO = 50 * 1024 * 1024; // 50 MB

function obtenerDrive() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error(
      "Falta configurar GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET o GOOGLE_REFRESH_TOKEN."
    );
  }

  const auth = new google.auth.OAuth2(clientId, clientSecret);
  auth.setCredentials({ refresh_token: refreshToken });

  return google.drive({
    version: "v3",
    auth,
  });
}

// CONSULTAR LOS RECUERDOS GUARDADOS EN GOOGLE DRIVE
export async function GET() {
  try {
    const carpetaPrincipal = process.env.GOOGLE_DRIVE_FOLDER_ID;

    if (!carpetaPrincipal) {
      return NextResponse.json(
        {
          estado: "error",
          mensaje: "Falta configurar GOOGLE_DRIVE_FOLDER_ID.",
        },
        { status: 500 }
      );
    }

    const drive = obtenerDrive();

    const resultado = await drive.files.list({
      
      fields: "files(id, name)",
      pageSize: 10,q: `'${carpetaPrincipal}' in parents and (name = 'Fotos' or name = 'Videos') and mimeType = 'application/vnd.google-apps.folder' and trashed = false`,
    });

    const carpetas = resultado.data.files || [];

    const recuerdos: {
      id: string;
      nombre: string;
      tipo: "foto" | "video";
      url: string;
      fecha: string;
    }[] = [];

    for (const carpeta of carpetas) {
      if (!carpeta.id) continue;

      const archivos = await drive.files.list({
        q: `'${carpeta.id}' in parents and trashed = false`,
        fields: "files(id, name, mimeType, createdTime)",
        orderBy: "createdTime desc",
        pageSize: 100,
      });

      for (const archivo of archivos.data.files || []) {
        if (!archivo.id || !archivo.mimeType) continue;

        let tipo: "foto" | "video" | null = null;

        if (archivo.mimeType.startsWith("image/")) {
          tipo = "foto";
        } else if (archivo.mimeType.startsWith("video/")) {
          tipo = "video";
        }

        if (!tipo) continue;

        recuerdos.push({
          id: archivo.id,
          nombre: archivo.name || "Recuerdo",
          tipo,
          url: `/api/recuerdos/${archivo.id}`,
          fecha: archivo.createdTime || "",
        });
      }
    }

    recuerdos.sort((a, b) => b.fecha.localeCompare(a.fecha));

    return NextResponse.json({
      estado: "correcto",
      mensaje: "Google Drive está conectado.",
      recuerdos,
    });
  } catch (error) {
    console.error("Error al consultar recuerdos:", error);

    return NextResponse.json(
      {
        estado: "error",
        mensaje: "No se pudieron consultar los recuerdos guardados.",
      },
      { status: 500 }
    );
  }
}

// SUBIR FOTOS Y VIDEOS A GOOGLE DRIVE
export async function POST(request: Request) {
  try {
    const formulario = await request.formData();
    const archivo = formulario.get("archivo");
    const tipo = formulario.get("tipo");

    if (!(archivo instanceof File)) {
      return NextResponse.json(
        { error: "Selecciona una foto o un video." },
        { status: 400 }
      );
    }

    if (tipo !== "foto" && tipo !== "video") {
      return NextResponse.json(
        { error: "El tipo debe ser foto o video." },
        { status: 400 }
      );
    }

    if (archivo.size === 0 || archivo.size > TAMANO_MAXIMO) {
      return NextResponse.json(
        {
          error: "El archivo debe pesar más de 0 y como máximo 50 MB.",
        },
        { status: 400 }
      );
    }

    const tiposValidos =
      tipo === "foto"
        ? TIPOS_PERMITIDOS.filter((t) => t.startsWith("image/"))
        : TIPOS_PERMITIDOS.filter((t) => t.startsWith("video/"));

    if (!tiposValidos.includes(archivo.type)) {
      return NextResponse.json(
        { error: "Formato de archivo no permitido." },
        { status: 400 }
      );
    }

    const carpetaPrincipal = process.env.GOOGLE_DRIVE_FOLDER_ID;

    if (!carpetaPrincipal) {
      return NextResponse.json(
        { error: "Falta configurar la carpeta de Drive." },
        { status: 500 }
      );
    }

    const drive = obtenerDrive();
    const nombreCarpeta = tipo === "foto" ? "Fotos" : "Videos";

    const busqueda = await drive.files.list({
      q: `'${carpetaPrincipal}' in parents and name = '${nombreCarpeta}' and mimeType = 'application/vnd.google-apps.folder' and trashed = false`,
      fields: "files(id,name)",
      pageSize: 10,
    });

    const carpetaDestino = busqueda.data.files?.[0]?.id;

    if (!carpetaDestino) {
      return NextResponse.json(
        {
          error: `No se encontró la carpeta ${nombreCarpeta} en Drive.`,
        },
        { status: 404 }
      );
    }

    const buffer = Buffer.from(await archivo.arrayBuffer());

    const nombreSeguro = archivo.name
      .replace(/[\\/:*?"<>|]/g, "_")
      .replace(/[\r\n]/g, "_");

    const subida = await drive.files.create({
      requestBody: {
        name: nombreSeguro,
        parents: [carpetaDestino],
        mimeType: archivo.type,
      },
      media: {
        mimeType: archivo.type,
        body: Readable.from(buffer),
      },
      fields: "id,name,mimeType",
    });

    return NextResponse.json({
      estado: "correcto",
      mensaje: "Archivo guardado en Google Drive.",
      archivo: {
        id: subida.data.id,
        nombre: subida.data.name,
        tipo,
      },
    });
  } catch (error) {
    console.error("Error al subir recuerdo:", error);

    return NextResponse.json(
      { error: "No se pudo guardar el archivo en Drive." },
      { status: 500 }
    );
  }
}
