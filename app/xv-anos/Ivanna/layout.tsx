import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TE INVITO A MI FIESTA DE XV AÑOS",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}