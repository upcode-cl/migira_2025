"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { Hotel } from "lucide-react";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { formatNumber } from "@/utils/number-formatter";
import { ResponseExchange } from "@/app/interfaces/interfaces";

interface Props {
  Titulo?: string;
  Dias?: string;
  Noches?: string;
  Precio?: string;
  Hotels?: string;
  ValorPersona?: string;
  ImagenDestino?: string;
  IdPrograma: number;
  cambio?: ResponseExchange;
}

const Destinos_info = ({
  Titulo,
  Dias,
  Noches,
  Precio,
  Hotels,
  ValorPersona,
  ImagenDestino,
  IdPrograma,
  cambio,
}: Props) => {
  const precioFormateado = formatNumber(Number(Precio));
  const cambioContadoValue =
    Number(String(cambio?.CambioContado || "0").replace(",", ".")) || 0;

  return (
    <div className="w-full bg-whites rounded-2xl shadow-2xl flex flex-col h-full">
      {" "}
      {/* Añadido flex flex-col h-full */}
      {/* Se crea un contenedor con la clase relative para que el contenido
          interno se posicione relativo al contenedor */}
      <motion.div
        whileHover={{ scale: 1.02, filter: "saturate(1.5)" }} // Aumenta la saturación a 150% al hacer hover
        className="relative w-full h-[400px] cursor-pointer " // Añadí cursor-pointer
        style={{ height: "250px" }}
      >
        {/* Se utiliza el componente Image de next/image para mostrar una imagen
            con el atributo src se indica la ruta de la imagen
            con el atributo layout se indica que el tama o de la imagen sera
            el mismo que el contenedor padre (en este caso el div con clase relative)
            con el atributo objectFit se indica que la imagen se ajuste al tama o
            del contenedor sin estar estirada */}
        <Image
          src={ImagenDestino || "/chile.jpg"}
          layout="fill"
          objectFit="cover"
          alt="chile"
          className="rounded-3xl p-1  "
        />
      </motion.div>
      <div className="flex flex-col flex-grow p-6 bg-white rounded-b-2xl">
        <h4 className="text-sm">
          <div className="flex pb-3">
            <MapPin className="" /> <span className="pl-2">{Titulo}</span>
          </div>
        </h4>
        <h3 className="text-xl font-bold text-[#58167D] mb-2">
          {" "}
          {/* Eliminado flex y h-[100%], añadido mb-2 */}
          <div className="flex text-[16px]">
            {" "}
            {/* Eliminado h-[100%] */}
            {Hotels === undefined ? (
              <span>(Confirmar con Agente)</span>
            ) : (
              <div className="flex flex-col">
                {" "}
                {/* Usar flex-col para apilar nombre del hotel y texto pequeño */}
                <div className="flex items-center">
                  {" "}
                  {/* Alinear icono y nombre del hotel */}
                  <Hotel className="mr-1" />{" "}
                  {/* Cambiado a mr-1 para mejor espaciado */}
                  <span className="text-3xl">{Hotels}</span>{" "}
                  {/* Cambiado a span para el texto, text-3xl para el tamaño */}
                </div>
                <div className="ml-2">
                  {" "}
                  {/* Indentar texto pequeño */}
                  <small>(Confirmar con Agente)</small>
                </div>
              </div>
            )}
          </div>
        </h3>

        <h5 className="pt-6 text-sm">Desde</h5>
        <h4 className="text-3xl pb-2 font-bold text-[#58167D]">
          USD {precioFormateado}
        </h4>
        <small className="text-[14px] mb-2 font-bold">
          CLP: ${formatNumber(Number(Precio || 0) * cambioContadoValue)}
        </small>

        <div className="pb-2">
          {" "}
          {/* Eliminado h-[30%] */}
          <div className="flex">
            <Sun />
            <span className="pl-2">{Dias} días </span> / <Moon />
            <span className="pl-2">{Noches} noches</span>
          </div>
        </div>
        <p className="pb-4">{ValorPersona}</p>
        <button className="mt-auto bg-yellow-400 p-3 w-[100%] sm:w-[100%] rounded-full self-end hover:bg-amber-600 transition-all duration-150 cursor-pointer flex justify-center items-center">
          <Link
            href={`/detalle-programa/${IdPrograma}`}
            className="font-semibold flex items-center"
          >
            Ver detalles
            <ChevronRight className="ml-1" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Destinos_info;
