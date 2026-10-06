import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TE INVITO A MI FIESTA DE XV AÑOS",
  description: "IVANNA LOAEZA · INVITACIÓN DIGITAL",
  openGraph: {
    title: "TE INVITO A MI FIESTA DE XV AÑOS",
    description: "IVANNA LOAEZA · INVITACIÓN DIGITAL",
    siteName: "Coral Studio",
    type: "website",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}