import { getAreas, getDestinos } from "@/app/api/Services";
import { Area, Destiny } from "@/app/interfaces/interfaces";
import DestinoPaquetesListado from "@/components/DestinoPaquetesListado";
import Image from "next/image";
import React from "react";

type Props = {
  params: Promise<{ idArea: string }>;
};

const page = async ({ params }: Props) => {
  const resolvedParams = await params;
  const idArea = Number(resolvedParams.idArea);
  const [destinosResponse, areasResponse] = await Promise.all([
    getDestinos(idArea),
    getAreas(),
  ]);

  const destinos: Destiny[] = destinosResponse.value.entities;
  const area = areasResponse.value.entities.find(
    (a: Area) => a.IdArea === idArea
  );
  const areaName = area ? area.Nombre : "Nuestros Destinos";

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
        {destinos.map((destino: Destiny) => (
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

export default page;
