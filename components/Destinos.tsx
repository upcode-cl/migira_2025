"use client";
import React, { useEffect, useState } from "react";
import Destinos_info from "./Destinos_info";
import { Exchange, getProgramasDestacados } from "@/app/api/Services";
import { Program, ResponseExchange } from "@/app/interfaces/interfaces";

const Destinos = () => {
  const [programas, setProgramas] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [cambio, setCambio] = useState<ResponseExchange | undefined>();

  const llamarProgramas = async () => {
    try {
      const response = await getProgramasDestacados();
      const exchangeResponse = await Exchange();

      if (response.statusCode === 200) {
        setProgramas(response.value.entities);
        setCambio(exchangeResponse);
      }
    } catch (error) {
      console.error("Error al cargar los programas:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    llamarProgramas();
  }, []);

  const SkeletonCard = () => (
    <div className="flex flex-col space-y-3">
      <div className="h-56 w-full rounded-xl bg-gray-200 animate-pulse" />
      <div className="space-y-2">
        <div className="h-6 w-3/4 rounded bg-gray-200 animate-pulse" />
        <div className="h-4 w-1/2 rounded bg-gray-200 animate-pulse" />
        <div className="h-4 w-1/4 rounded bg-gray-200 animate-pulse" />
      </div>
    </div>
  );

  return (
    <div className=" bg-white mb-10">
      <div>
        <h2 className="text-[30px] md:text-[45px] text-[#58167D] flex justify-center items-center text-center pl-5 pr-5 md:pl-20 md:pr-20 font-bold">
          A demás de Giras de Estudio nos especializamos en Programas Turísticos
          para quienes buscan servicios exclusivos.
        </h2>
      </div>
      <div className="grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 gap-10 pl-4 pr-4 lg:pl-28  lg:pr-28 pt-[50px] ">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : programas
              .slice(0, 6)
              .map((programa: Program) => (
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

export default Destinos;
