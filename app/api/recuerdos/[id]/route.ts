
import { NextResponse } from "next/server";
import { google } from "googleapis";

export const runtime = "nodejs";

function obtenerDrive() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Faltan las credenciales de Google Drive.");
  }

  const auth = new google.auth.OAuth2(clientId, clientSecret);
  auth.setCredentials({ refresh_token: refreshToken });

  return google.drive({ version: "v3", auth });
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const carpetaPrincipal = process.env.GOOGLE_DRIVE_FOLDER_ID;

    if (!carpetaPrincipal || !id) {
      return NextResponse.json(
        { error: "Falta el ID de la carpeta o del archivo." },
        { status: 400 }
      );
    }

    const drive = obtenerDrive();

    // Buscar las carpetas Fotos y Videos dentro de la carpeta del álbum.
    const resultadoCarpetas = await drive.files.list({
      q: `'${carpetaPrincipal}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false`,
      fields: "files(id,name)",
      pageSize: 100,
    });

    const carpetasPermitidas = (resultadoCarpetas.data.files || [])
      .filter(
        (carpeta) =>
          carpeta.name === "Fotos" || carpeta.name === "Videos"
      )
      .map((carpeta) => carpeta.id)
      .filter((carpetaId): carpetaId is string => Boolean(carpetaId));

    if (carpetasPermitidas.length === 0) {
      console.error("No se encontraron las carpetas Fotos o Videos.");
      return NextResponse.json(
        { error: "No se encontraron las carpetas Fotos y Videos en Drive." },
        { status: 404 }
      );
    }

    // Consultar los metadatos del archivo solicitado.
    const resultadoArchivo = await drive.files.get({
      fileId: id,
      fields: "id,name,mimeType,parents,trashed",
    });

    const archivo = resultadoArchivo.data;
    const padres = archivo.parents || [];

    const perteneceAlAlbum = padres.some((parent) =>
      carpetasPermitidas.includes(parent)
    );

    const esMultimedia =
      Boolean(archivo.mimeType) &&
      (archivo.mimeType!.startsWith("image/") ||
        archivo.mimeType!.startsWith("video/"));

    if (!perteneceAlAlbum || archivo.trashed || !esMultimedia) {
      console.error("Archivo rechazado:", {
        id,
        padres,
        carpetasPermitidas,
        papelera: archivo.trashed,
        tipo: archivo.mimeType,
      });

      return NextResponse.json(
        {
          error: "El archivo no pasó la validación del álbum.",
          detalle: {
            perteneceAlAlbum,
            enPapelera: Boolean(archivo.trashed),
            tipo: archivo.mimeType || "desconocido",
          },
        },
        { status: 404 }
      );
    }

    // Descargar el contenido real del archivo desde Google Drive.
    const contenido = await drive.files.get(
      {
        fileId: id,
        alt: "media",
      },
      {
        responseType: "arraybuffer",
      }
    );

    const datos = Buffer.from(contenido.data as ArrayBuffer);

    return new NextResponse(datos, {
      status: 200,
      headers: {
        "Content-Type": archivo.mimeType!,
        "Content-Length": String(datos.length),
        "Cache-Control": "private, max-age=3600",
        "Content-Disposition": "inline",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error: unknown) {
    const errorGoogle = error as {
      message?: string;
      code?: number | string;
      response?: {
        status?: number;
        data?: {
          error?: {
            message?: string;
          };
        };
      };
    };

    console.error("Error al obtener archivo de Drive:", {
      mensaje:
        errorGoogle.response?.data?.error?.message ||
        errorGoogle.message ||
        "Error desconocido",
      codigo: errorGoogle.response?.status || errorGoogle.code,
    });

    return NextResponse.json(
      {
        error: "No se pudo recuperar el archivo de Google Drive.",
        detalle:
          errorGoogle.response?.data?.error?.message ||
          errorGoogle.message ||
          "Error desconocido",
      },
      { status: 500 }
    );
  }
}
