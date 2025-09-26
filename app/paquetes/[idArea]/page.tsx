"use client";

import { useParams } from "next/navigation";
import { getAreas, getDestinos } from "@/app/api/Services";
import { Area, Destiny } from "@/app/interfaces/interfaces";
import DestinoPaquetesListado from "@/components/DestinoPaquetesListado";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { idArea } = useParams<{ idArea: string }>(); // 👈 ya tipado
  const id = Number(idArea);

  const [destinos, setDestinos] = useState<Destiny[]>([]);
  const [areaName, setAreaName] = useState("Nuestros Destinos");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [destinosResponse, areasResponse] = await Promise.all([
        getDestinos(id),
        getAreas(),
      ]);

      if (destinosResponse.statusCode === 200) {
        setDestinos(destinosResponse.value.entities);
      }

      if (areasResponse.statusCode === 200) {
        const area = areasResponse.value.entities.find(
          (a: Area) => a.IdArea === id
        );
        if (area) setAreaName(area.Nombre);
      }

      setLoading(false);
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <div className="relative w-full h-[200px]">
        <Image src="/default.jpeg" alt="logo" fill className="object-cover" />
      </div>
      <h1 className="text-3xl font-bold text-purple-800 text-center mt-6">
        {areaName.toUpperCase()}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
        {loading
          ? "Cargando..."
          : destinos.map((destino) => (
              <DestinoPaquetesListado
                key={destino.IdDestino}
                destino={destino}
                idArea={id}
              />
            ))}
      </div>
    </div>
  );
};

export default Page;
