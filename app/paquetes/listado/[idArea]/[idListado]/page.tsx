"use client";
import { Exchange, getProgramaListadoDetalle } from "@/app/api/Services";
import { Program, ResponseExchange } from "@/app/interfaces/interfaces";
import Destinos_info from "@/components/Destinos_info";
import React, { useCallback, useEffect, useState } from "react";

type Props = {
  params: Promise<{ idArea: string; idListado: string }>;
};

const Page = ({ params }: Props) => {
  const [programas, setProgramas] = useState<Program[]>([]);
  const [resolvedParams, setResolvedParams] = useState<{
    idArea: string;
    idListado: string;
  } | null>(null);

  const [cambio, setCambio] = useState<ResponseExchange | undefined>();

  useEffect(() => {
    const resolveParams = async () => {
      const resolved = await params;
      setResolvedParams(resolved);
    };
    resolveParams();
  }, [params]);

  const llamarProgramas = useCallback(async () => {
    if (!resolvedParams) return;

    const response = await getProgramaListadoDetalle(
      Number(resolvedParams.idArea),
      Number(resolvedParams.idListado)
    );
    const exchangeResponse = await Exchange();

    if (response.statusCode === 200) {
      setProgramas(response.value.entities);
      setCambio(exchangeResponse);
    }
  }, [resolvedParams]);

  useEffect(() => {
    if (resolvedParams) {
      llamarProgramas();
    }
  }, [llamarProgramas, resolvedParams]);

  if (!resolvedParams) {
    return (
      <div className="bg-white mb-10 flex justify-center items-center min-h-[400px]">
        <div className="text-[#58167D] text-xl">Cargando...</div>
      </div>
    );
  }

  return (
    <div className=" bg-white mb-10 ">
      <h2 className="text-[50px] text-[#58167D] flex justify-center items-center text-center pl-5 pr-5 font-bold">
        Nuestros destinos más populares
      </h2>
      <div className="grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 gap-10 pl-4 pr-4 lg:pl-28  lg:pr-28 pt-[50px] ">
        {programas.map((programa: Program) => (
          <Destinos_info
            key={programa.IdPrograma}
            Titulo={programa.Titulo}
            Dias={programa.Dias.toString()}
            Noches={programa.Noches.toString()}
            Precio={programa.Precio.toString()}
            Hotels={programa.ValoresProgramas[0]?.Hotel}
            ValorPersona={programa.ValoresProgramas[0]?.Text}
            ImagenDestino={programa.UrlImage}
            IdPrograma={programa.IdPrograma}
            cambio={cambio}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
