import type { Metadata } from "next";

import {
  Allura,
  Montserrat,
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

export const metadata: Metadata = {
  title: "Invitación XV",
  description: "Invitación digital premium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="es">

      <body className={montserrat.className}>

        <div
          style={{
            fontFamily: allura.style.fontFamily,
          }}
          id="allura-font"
        />

        {children}

      </body>

    </html>

  );
}