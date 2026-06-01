import type { Metadata } from "next";

import {
  Allura,
  Montserrat,
  Cormorant_Garamond,
} from "next/font/google";

import "./globals.css";

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "CORAL STUDIO",
  description: "Invitaciones digitales premium",

  openGraph: {
    title: "CORAL STUDIO",
    description: "Invitaciones digitales premium",
    url: "https://coralstudio.com.mx",
    siteName: "CORAL STUDIO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="es">

    <body
  className={`${montserrat.className} ${cormorant.variable}`}
>

  <div
    style={{
      fontFamily: allura.style.fontFamily,
    }}
    id="allura-font"
  />

  <div
    style={{
      fontFamily: cormorant.style.fontFamily,
    }}
    id="cormorant-font"
  />

  {children}

</body>

    </html>

  );
}