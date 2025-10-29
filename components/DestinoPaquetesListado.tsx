import { Destiny } from "@/app/interfaces/interfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  destino: Destiny;
  idArea: number | string;
}

const DestinoPaquetesListado = ({ destino, idArea }: Props) => {
  return (
    <Link
      href={`/paquetes/listado/${idArea}/${destino.IdDestino}`}
      className="block shadow-lg hover:scale-105 transition-transform duration-300 rounded-2xl"
    >
      <div className="w-full bg-amber-400 rounded-2xl relative h-[300px] overflow-hidden">
        <Image
          src={destino.UrlImage || "/default.jpeg"}
          alt={destino.Nombre || "Imagen del destino"}
          fill
          className="object-cover"
        />

        {/* Reemplazando el degradado por la barra morada */}
        <div className="absolute bottom-0 left-0 w-full z-20">
          <div className="w-full bg-[#58167D] text-white px-4 py-3 rounded-b-2xl text-center">
            <h2 className="font-bold text-2xl whitespace-normal break-words">
              {destino.Nombre}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DestinoPaquetesListado;
