import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pases: string }>;
}): Promise<Metadata> {
  const { pases } = await params;

  const numero = Number(pases);

  const textoPase =
    numero === 1
      ? "1 PASE"
      : `${numero} PASES`;

  return {
    title: "TE INVITO A MI FIESTA DE XV AÑOS",
    description: `IVANNA LOAEZA · ${textoPase}`,
    openGraph: {
      title: "TE INVITO A MI FIESTA DE XV AÑOS",
      description: `IVANNA LOAEZA · ${textoPase}`,
      siteName: "Coral Studio",
      type: "website",
    },
  };
}

export { default } from "../page";