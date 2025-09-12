/* eslint-disable @typescript-eslint/no-explicit-any */

import { getPrograma } from "@/app/api/Services";
import { Program } from "@/app/interfaces/interfaces";
import DetallePrograma from "@/components/DetallPrograma";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const id: number = Number(resolvedParams.id);

  const response = await getPrograma(id);
  if (response.statusCode === 200) {
    const programa: Program = response.value.entity;
    return <DetallePrograma programa={programa} />;
  }

  return <></>;
}
