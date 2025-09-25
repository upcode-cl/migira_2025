"use client";
import { Exchange, getCruceros } from "@/app/api/Services";
import { Program, ResponseExchange } from "@/app/interfaces/interfaces";
import React, { useEffect, useState } from "react";
import Destinos_info_giras from "../../components/Destino_info_giras";

const Cruceros = () => {
  const [programasGiras, setProgramasGiras] = useState<Program[]>([]);
  const [cambio, setCambio] = useState<ResponseExchange | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        setError(null);
        setLoading(true);
        // Ejecutamos ambas peticiones en paralelo para mayor eficiencia
        const [crucerosResponse, exchangeResponse] = await Promise.all([
          getCruceros(),
          Exchange(),
        ]);

        if (crucerosResponse.statusCode === 200) {
          setProgramasGiras(crucerosResponse.value.entities);
        } else {
          throw new Error("No se pudieron cargar los datos de los cruceros.");
        }
        setCambio(exchangeResponse);
      } catch (err) {
        console.error("Error fetching data in Cruceros component:", err);
        setError(
          "Hubo un problema al cargar la información. Por favor, intenta de nuevo más tarde."
        );
      } finally {
        setLoading(false);
      }
    };
    cargarDatos();
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

  if (error) {
    return <div className="text-center p-20 text-red-600">{error}</div>;
  }

  return (
    <div className=" bg-white ">
      <div className="bg-white flex items-center justify-center flex-col p-4 text-center">
        <h2 className="text-[60px] text-[#58167D]">Cruceros</h2>
        <h3 className="text-[30px] text-[#58167D]">
          Vive una experiencia de viaje inigualable
        </h3>
      </div>
      {/* video de youtube */}

      {/* <div className="bg-[url('/fondo-video.jpg')] bg-cover bg-no-repeat bg-center"> */}
      {/* <iframe
            src="https://player.vimeo.com/video/109842581"
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 pl-4 pr-4 lg:pl-28  lg:pr-28 pt-[50px] pb-10">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : programasGiras.map((programas: Program) => (
              <Destinos_info_giras
                key={programas.IdPrograma}
                Titulo={programas.Titulo}
                Dias={programas.Dias.toString()}
                Noches={programas.Noches.toString()}
                Precio={programas.Precio.toString()}
                Hotels={programas.ValoresProgramas[0]?.Hotel}
                ValorPersona={programas.ValoresProgramas[0]?.Text}
                ImagenDestino={programas.UrlImage}
                IdPrograma={programas.IdPrograma}
                cambio={cambio}
              />
            ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Cruceros;
