import type { Metadata } from "next";

import {
  Allura,
  Montserrat,
  Cormorant_Garamond,
  Great_Vibes,
  Playfair_Display,
  Parisienne,
} from "next/font/google";

import "./globals.css";

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
});
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
});

const parisienne = Parisienne({
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
    fontFamily: greatVibes.style.fontFamily,
  }}
  id="greatvibes-font"
/>

<div
  style={{
    fontFamily: playfair.style.fontFamily,
  }}
  id="playfair-font"
/>

<div
  style={{
    fontFamily: parisienne.style.fontFamily,
  }}
  id="parisienne-font"
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