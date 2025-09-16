"use client";
import { getGiras, Exchange } from "@/app/api/Services";
import { Program, ResponseExchange } from "@/app/interfaces/interfaces";
import React, { useEffect, useState } from "react";
import Destinos_info_giras from "./Destino_info_giras";

const Giras = () => {
  const [programasGiras, setProgramasGiras] = useState<Program[]>([]);
  const [cambio, setCambio] = useState<ResponseExchange | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // funcion que trabaja con la API para traer las giras de estudio
  const girasDeEstudio = async () => {
    try {
      setLoading(true);
      setError(null);

      // Ejecutamos ambas promesas en paralelo para mayor eficiencia
      const response = await getGiras();
      const exchangeResponse = await Exchange();
      // Verificamos y actualizamos los estados solo si ambas peticiones fueron exitosas
      if (response.statusCode === 200 && exchangeResponse) {
        setProgramasGiras(response.value.entities);
        setCambio(exchangeResponse);
      } else {
        // Si algo falla, lanzamos un error para que lo capture el catch
        throw new Error(
          "No se pudieron cargar los datos de giras o el tipo de cambio."
        );
      }
    } catch (err) {
      console.error("Error fetching data in Giras component:", err);
      setError(
        "Hubo un problema al cargar la información. Por favor, intenta de nuevo más tarde."
      );
    } finally {
      // Ocultamos el loader, ya sea que todo fue bien o mal
      setLoading(false);
    }
  };

  useEffect(() => {
    // llamamos a la función para cargar las giras de estudio
    girasDeEstudio();
  }, []);

  if (loading) {
    return <div className="text-center p-20">Cargando programas...</div>;
  }

  if (error) {
    return <div className="text-center p-20 text-red-600">{error}</div>;
  }

  return (
    <div className=" bg-white ">
      <div className="bg-white flex items-center justify-center flex-col p-4 text-center">
        <h2 className="text-[60px] text-[#58167D]">Giras de Estudio</h2>
        <h3 className="text-[30px] text-[#58167D]">
          La mejor experiencia para disfrutar con tu curso
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
        {programasGiras.map((programas: Program) => (
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

export default Giras;
