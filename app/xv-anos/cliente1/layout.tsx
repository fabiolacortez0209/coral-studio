import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TE INVITO A MI FIESTA DE XV AÑOS | IVANNA LOAEZA | 1 PASE",

  description:
    "Te invito a celebrar conmigo mis XV años. Ivanna Loaeza.",

  openGraph: {
    title: "TE INVITO A MI FIESTA DE XV AÑOS",
    description: "IVANNA LOAEZA · 1 PASE",
    url: "https://coral-studio.com.mx/xv-anos/cliente1",
    siteName: "Ivanna Loaeza · Mis XV Años",
    type: "website",
    images: [
      {
        url: "https://coral-studio.com.mx/cliente1/FOTO%201.jpg",
        width: 1200,
        height: 630,
        alt: "Ivanna Loaeza · Mis XV Años",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TE INVITO A MI FIESTA DE XV AÑOS",
    description: "IVANNA LOAEZA · 1 PASE",
    images: [
      "https://coral-studio.com.mx/cliente1/FOTO%201.jpg",
    ],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}