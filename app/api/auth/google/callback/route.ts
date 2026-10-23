
import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const error = request.nextUrl.searchParams.get("error");

  if (error || !code) {
    return NextResponse.json(
      { error: "No se autorizó la conexión con Google." },
      { status: 400 }
    );
  }

  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const redirectUri =
    `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/auth/google/callback`;

  if (!clientId || !clientSecret) {
    return NextResponse.json(
      { error: "Faltan las credenciales OAuth." },
      { status: 500 }
    );
  }

  const oauth2Client = new google.auth.OAuth2(
    clientId,
    clientSecret,
    redirectUri
  );

  try {
    const { tokens } = await oauth2Client.getToken(code);

    if (!tokens.refresh_token) {
      console.error(
        "Google no devolvió refresh_token. Vuelve a autorizar el acceso."
      );
      return NextResponse.json(
        {
          error:
            "Google no entregó un token de actualización. Revisa el acceso OAuth y vuelve a intentarlo.",
        },
        { status: 400 }
      );
    }

    // Solo para desarrollo local: copia el token desde la terminal.
    // No lo publiques ni lo compartas.
    console.log("GOOGLE_REFRESH_TOKEN:", tokens.refresh_token);

    return new NextResponse(
      "Google autorizó el acceso. Revisa la terminal de desarrollo para completar la configuración.",
      { headers: { "Content-Type": "text/plain; charset=utf-8" } }
    );
  } catch (err) {
    console.error("Error al autorizar Google:", err);
    return NextResponse.json(
      { error: "No se pudo completar la autorización de Google." },
      { status: 500 }
    );
  }
}
