import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ pases: string }>;
}) {
  const { pases } = await params;

  redirect(`/xv-anos/Ivanna?pases=${pases}`);
}