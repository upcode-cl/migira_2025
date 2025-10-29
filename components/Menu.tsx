"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

import { AlignJustify } from "lucide-react";
import { Ship } from "lucide-react";
import { Sparkles } from "lucide-react";
import { Luggage } from "lucide-react";
import { Headset } from "lucide-react";
import { Plane } from "lucide-react";
import { Exchange } from "@/app/api/Services";
import { ResponseExchange } from "@/app/interfaces/interfaces";
import Link from "next/link";

const Menu = () => {
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    const hoy = new Date();

    const opciones: Intl.DateTimeFormatOptions = {
      weekday: "long", // día de la semana (viernes)
      day: "2-digit", // día (02)
      month: "long", // mes (mayo)
      year: "numeric", // año (2025)
    };

    const fechaFormateada = hoy.toLocaleDateString("es-ES", opciones);
    setFecha(fechaFormateada);
  }, []);

  const [cambio, setCambio] = useState<ResponseExchange | undefined>({
    Id: 0,
    UserId: 0,
    CambioContado: 0,
    CambioCredito: 0,
    DateUp: "",
    FechaDesde: "",
    FechaHasta: "",
  });

  const exChange = async () => {
    try {
      const response = await Exchange();
      if (response) {
        setCambio(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    exChange();
  }, []);

  return (
    <div className="w-full lg:w-full  bg-[#58167D] flex   p-5 pt-5 items-center h-[65px] sm:pl-20 pl-10 pr-10 sm:pr-20 ">
      {/* menu mobile */}
      <div className="block sm:hidden ">
        <Sheet>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SheetTrigger className="text-white border-1 border-white p-1">
              <AlignJustify style={{ width: "15px", height: "15px" }} />
            </SheetTrigger>
          </div>
          <SheetContent>
            <SheetHeader>
              <SheetTitle></SheetTitle>

              <SheetDescription>
                <Link href="/">
                  <li className="animacion-botones">Home</li>
                </Link>
                <Link href="/paquetes">
                  <li className="animacion-botones">Paquetes</li>
                </Link>
                <Link href="/lujos">
                  <li className="animacion-botones">Lujos</li>
                </Link>
                <Link href="/cruceros">
                  <li className="animacion-botones">Cruceros</li>
                </Link>
                <Link href="#contacto">
                  <li className="animacion-botones">Contacto</li>
                </Link>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div>
        <Image
          src="/gira.png"
          width={50}
          height={50}
          alt="logo"
          className="md:block lg:hidden  block absolute top-3 right-8 sm:top-3 sm:right-8 md:top-4 md:left-6 md:w-[40px]"
        />
      </div>

      {/* fin menu mobile */}
      <div className="lg:w-[30%] md:hidden lg:block hidden">
        <Link href="/">
          <Image src="/gira.png" width={50} height={50} alt="logo" />
        </Link>
      </div>
      <div className="flex justify-around gap-[100px] ">
        <nav className=" w-[60%] ">
          <ul className="hidden md:flex gap-3.5 justify-around text-white  ">
            <Link href="/">
              {" "}
              <li className="animacion-botones ">
                <span>
                  <Plane />
                </span>
                Home
              </li>
            </Link>
            <Link href="/paquetes">
              <li className="animacion-botones">
                <span>
                  <Luggage />
                </span>
                Paquetes
              </li>
            </Link>
            <Link href="/lujos">
              <li className="animacion-botones">
                <span>
                  <Sparkles />
                </span>
                Lujos
              </li>
            </Link>
            <Link href="/cruceros">
              <li className="animacion-botones ">
                <span>
                  <Ship />{" "}
                </span>
                Cruceros
              </li>
            </Link>
            <li className="animacion-botones">
              <a href="#contacto" className="flex flex-col items-center">
                <span>
                  <Headset />
                </span>
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        {/* menu movil */}

        <div className="hidden md:flex items-center justify-baseline w-[35%]">
          <p className="text-white text-[12px] ">
            {fecha} <br /> cambio contado: {cambio?.CambioContado} - cambio
            crédito: {cambio?.CambioCredito}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
