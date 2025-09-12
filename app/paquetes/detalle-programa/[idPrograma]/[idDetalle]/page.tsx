/* eslint-disable @typescript-eslint/no-explicit-any */

import { getProgramaDetalle } from "@/app/api/Services";
import { Program } from "@/app/interfaces/interfaces";
import DetallePrograma from "@/components/DetallPrograma";

type Props = {
  params: Promise<{ idPrograma: string; idDetalle: string }>;
};

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const idPrograma: number = Number(resolvedParams.idPrograma);
  const idDetalle: number = Number(resolvedParams.idDetalle);

  const response = await getProgramaDetalle(idPrograma, idDetalle);

  if (response.statusCode === 200) {
    const programa: Program = response.value.entities[0];

    return <DetallePrograma programa={programa} />;
  }

  return <></>;
}
