"use client";

import DestinoPaquetes from "@/components/DestinoPaquetes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Area } from "@/app/interfaces/interfaces";
import { getAreas } from "../api/Services";
import Link from "next/link";

const Paquetes = () => {
  const [areas, setAreas] = useState<Area[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        setLoading(true);
        const response = await getAreas();
        if (response.statusCode === 200) {
          setAreas(response.value.entities);
        }
      } catch (error) {
        console.error("Error al cargar las áreas:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAreas();
  }, []);

  const SkeletonCard = () => (
    <div className="w-[250px] h-[300px] bg-gray-200 rounded-2xl animate-pulse p-4 flex flex-col justify-end">
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
          Descubre nuestros Paquetes de Viaje
        </h1>
        <p className="mt-2 text-gray-700 text-lg">
          Vive experiencias inolvidables con nuestros destinos exclusivos. Ya
          sea que sueñes con playas paradisíacas, aventuras en la montaña o
          escapadas urbanas, tenemos el paquete perfecto para ti. ¡Viaja fácil,
          viaja mejor!
        </p>
      </div>
      {/* paquetes */}

      <div className="flex flex-wrap gap-6 mt-6 justify-center pb-5">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : areas.map((area: Area) => (
              <Link href={`/paquetes/${area.IdArea}`} key={area.IdArea}>
                <DestinoPaquetes areas={area} />
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Paquetes;
