import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#58167D] p-14 text-white flex flex-col  justify-center items-center pb-4 ">
      <div className="flex flex-col gap-7 md:flex-row md:justify-around w-full justify-center items-center">
        <div>
          <Image src="/gira.png" width={120} height={120} alt="logo" />
        </div>
        <div>
          <div>
            <Dialog>
              <DialogTrigger>¿Quienes somos?</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>¿Quienes somos?</DialogTitle>
                  <DialogDescription className="text-justify">
                    Somos American Travel Tour Ltda, Agencia de viajes y
                    operador mayorista con una trayectoria de 15 años.
                    <br></br>
                    <br></br>
                    Incorporada a la Asociación Chilena de Turismo ACHET,
                    SERNATUR y con Sello de Calidad Turística. Por medio de
                    nuestro Departamento Estudiantil Mi Gira, en alianza con
                    nuestros representantes con más de 30 años de experiencia en
                    realizar viajes de estudios alrededor del mundo, entregamos
                    diversas alternativas de viajes a nivel nacional como
                    internacional.<br></br>
                    <br></br> Quienes ya nos conocen, saben que los principales
                    atributos de nuestros servicios son; un gran
                    destino,seguridad y calidad.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          {/* seguridad para tus hijos   */}
          <div>
            <Dialog>
              <DialogTrigger>Seguridad para tus hijos</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Seguridad para tus hijos</DialogTitle>
                  <DialogDescription>
                    Unido a la gran experiencia de nuestros guías profesionales,
                    los programas ofertados poseen un seguro con la cobertura
                    apropiada al destino elegido:
                    <br></br>
                    <br></br>
                    <ul>
                      <li>Seguro de accidente</li>
                      <li>Asistencia medica</li>
                      <li>Medicamentos</li>
                      <li>Seguro de vida</li>
                      <li>Rondas Medicas</li>
                    </ul>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          {/* profesionales */}
          <div>
            <Dialog>
              <DialogTrigger>Profesionales</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Profesionales</DialogTitle>
                  <DialogDescription className="text-justify">
                    Contamos con personal debidamente calificado y una acabada
                    planificación de nuestros programas, conductores de aprobada
                    seriedad y experiencia, así como guías profesionales de
                    dedicación exclusiva a su rubro
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>

          {/* calidad de servicio */}
          <div>
            <Dialog>
              <DialogTrigger>Calidad de Servicio</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Calidad de Servicio</DialogTitle>
                  <DialogDescription className="text-justify">
                    Alternativa de hoteles 3, 4 y 5, y de prestigio en cada
                    destino.
                    <br></br> Transporte aéreo y terrestre de primer orden a
                    nivel nacional e internacional. Representantes exclusivos en
                    nuestros destinos.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>

          {/* formas de pago */}
          <div>
            <Dialog>
              <DialogTrigger>Formas de Pago</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Formas de Pago</DialogTitle>
                  <DialogDescription>
                    Razón Social: American Travel Tour Ltda. Rut: 76.966.970 – 1
                    Cuenta Corriente Banco Santander en Pesos N° 61-55539-0
                    Cuenta Corriente Banco Santander en Dólares No 5100067341
                    <ul>
                      <li>Pago al contado vía transferencia electrónica</li>
                      <li>Pago al contado vía depósito en dólar</li>
                      <li>Pago con cheques</li>
                      <li>Pago con tarjeta de crédito bancaria</li>
                      <li>Pago vía webpay </li>
                    </ul>
                    Cada año, más colegios nos prefieren. Vive la experiencia:
                    MI GIRA CON AMERICAN TRAVEL TOUR.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div>
          <Dialog>
            <DialogTrigger>Póliticas de Explotación Sexual</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure 2?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="mt-10">
        <p>© 2025: Mi Gira SPA</p>
      </div>
      <div>
        <p className="text-xs">
          Sitio desarrollado por{" "}
          <a href="www.upcode.cl" target="_blank">
            UP Code
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
