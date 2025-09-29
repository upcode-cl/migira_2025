import React from "react";
import { PhoneCall } from "lucide-react";
import { Mail } from "lucide-react";
import Image from "next/image";

const Contacto = () => {
  return (
    <div className="relative w-[90%] mx-auto mb-8 overflow-hidden rounded-2xl shadow bg-yellow-400">
      <Image
        src="/fondo-contacto.png"
        alt="Fondo de la sección de contacto"
        layout="fill"
        objectFit="cover"
        className="opacity-20"
        quality={100}
      />
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-12 place-items-center text-center">
        <div className="font-bold text-4xl lg:text-4xl leading-none break-words">
          CONTÁCTANOS
        </div>
        <div className="font-semibold text-lg">
          {/* Aquí puedes poner un enlace o ícono de Instagram */}
        </div>
        <div className="flex items-center justify-center gap-2 font-medium">
          {/* <Mail /> */}
          {/* <span> contacto@migira.cl</span> */}
        </div>
        <a
          href="https://wa.me/56990895439"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 font-medium hover:underline"
        >
          <PhoneCall /> <span>whatsapp : (+56 9) 9089 5439</span>
        </a>
      </div>
    </div>
  );
};

export default Contacto;
