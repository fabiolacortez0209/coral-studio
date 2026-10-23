
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    mensaje: "Coral Studio Memories está funcionando",
    estado: "correcto",
  });
}
