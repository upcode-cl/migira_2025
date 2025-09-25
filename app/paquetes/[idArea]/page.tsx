"use client";

import { getAreas, getDestinos } from "@/app/api/Services";
import { Area, Destiny } from "@/app/interfaces/interfaces";
import DestinoPaquetesListado from "@/components/DestinoPaquetesListado";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  params: { idArea: string };
};

const Page = ({ params }: Props) => {
  const [destinos, setDestinos] = useState<Destiny[]>([]);
  const [areaName, setAreaName] = useState<string>("Nuestros Destinos");
  const [loading, setLoading] = useState(true);
  const idArea = Number(params.idArea);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [destinosResponse, areasResponse] = await Promise.all([
          getDestinos(idArea),
          getAreas(),
        ]);

        if (destinosResponse.statusCode === 200) {
          setDestinos(destinosResponse.value.entities);
        }

        if (areasResponse.statusCode === 200) {
          const area = areasResponse.value.entities.find(
            (a: Area) => a.IdArea === idArea
          );
          if (area) {
            setAreaName(area.Nombre);
          }
        }
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [idArea]);

  const SkeletonCard = () => (
    <div className="w-full h-[300px] bg-gray-200 rounded-2xl animate-pulse p-4 flex flex-col justify-end">
      <div className="h-6 w-3/4 bg-gray-300 rounded" />
    </div>
  );

  return (
    <div className="">
      {/* banner */}
      <div className="relative w-full h-[200px]">
        <Image src="/default.jpeg" alt="logo" fill className="object-cover" />
      </div>

      {/* titulos */}
      <div className="w-[100%] text-center mt-6 px-12">
        <h1 className="text-3xl font-bold text-purple-800">
          {areaName.toUpperCase()}
        </h1>
        <p className="mt-2 text-gray-700 text-lg">
          Bienvenido a un mundo de posibilidades. Aquí encontrarás los mejores
          itinerarios, ya sea que busques playas paradisíacas, emocionantes
          cruceros o escapadas únicas. Inspírate y prepárate para crear
          recuerdos que durarán toda la vida.
        </p>
      </div>
      {/* paquetes */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 lg:p-10 pt-12 pb-5">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : destinos.map((destino: Destiny) => (
              <DestinoPaquetesListado
                key={destino.IdDestino}
                destino={destino}
                idArea={idArea}
              />
            ))}
      </div>
    </div>
  );
};

export default Page;
