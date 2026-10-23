import { NextResponse } from "next/server";
import { timingSafeEqual } from "node:crypto";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const contraseñaCorrecta = process.env.ALBUM_DOWNLOAD_PASSWORD;

    if (!contraseñaCorrecta) {
      console.error("Falta configurar ALBUM_DOWNLOAD_PASSWORD.");

      return NextResponse.json(
        { error: "La contraseña no está configurada en el servidor." },
        { status: 500 }
      );
    }

    const datos = await request.json();
    const clave = datos?.clave;

    if (typeof clave !== "string" || clave.length === 0) {
      return NextResponse.json(
        { error: "Escribe la contraseña." },
        { status: 400 }
      );
    }

    const claveRecibida = Buffer.from(clave, "utf8");
    const claveGuardada = Buffer.from(contraseñaCorrecta, "utf8");

    const esCorrecta =
      claveRecibida.length === claveGuardada.length &&
      timingSafeEqual(claveRecibida, claveGuardada);

    if (!esCorrecta) {
      return NextResponse.json(
        { error: "La contraseña es incorrecta." },
        { status: 401 }
      );
    }

    return NextResponse.json({
      correcto: true,
    });
  } catch (error) {
    console.error("Error al validar contraseña:", error);

    return NextResponse.json(
      { error: "No se pudo verificar la contraseña." },
      { status: 500 }
    );
  }
}