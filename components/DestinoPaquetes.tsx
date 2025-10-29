"use client";
import { Area } from "@/app/interfaces/interfaces";
import Image from "next/image";
import React from "react";

const DestinoPaquetes = ({ areas }: { areas: Area }) => {
  return (
    <div className="flex flex-wrap gap-4 shadow-lg hover:scale-105 transition-transform duration-300">
      <div className="w-[250px] bg-amber-400 rounded-2xl relative h-[300px] overflow-hidden">
        <Image
          src="/default.jpeg"
          alt="destinos"
          fill
          className="object-cover rounded-2xl"
        />

        <div className="absolute bottom-0 left-0 w-full h-[50%]   rounded-2xl z-10" />

        {/* Barra morada pegada al fondo del card; texto en blanco y wrap para mostrar completo */}
        <div className="absolute bottom-0 left-0 w-full z-20">
          <div className="w-full bg-[#58167D] text-white px-4 py-3 rounded-b-2xl text-center">
            <h2 className="font-bold text-2xl whitespace-normal break-words">
              {areas.Nombre}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinoPaquetes;
