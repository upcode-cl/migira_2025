export interface ValorPrograma {
   Hotel?: string;
  Habitacion: string;
  Precio?: string;
  Text?:string;
  
}

export interface Programa {
  IdPrograma:number;
  Titulo: string;
  Dias: string;
  Noches: string;
  Precio: string;
  UrlImage: string;
  ValoresProgramas: ValorPrograma[];
  
}

export interface Itinerario {
  Dia: number;
  Cuerpo: string;
  Tipo:string;
  Actividad:string;
  IdItinerario:number;
}

export interface Incluye {
  Texto: string;
}

export interface Condicioness {
  Texto: string;
}

export interface Actividad {
  Texto: string;
}

export interface ProgramaDetalle {
  IdPrograma: number;
  Subtitulo: string;
  Titulo: string;
  Dias: string;
  Noches: string;
  Precio: string;
  UrlImage: string;
  ValoresProgramas: ValorPrograma[];
  Itinerarios: Itinerario[];
  Texto: string;
  Incluyes: Incluye[];
  Video:string;
  Condiciones:Condicioness[];
  Actividades:Actividad[];
  

}

export interface ApiResponse {
  value: {
    entities: Programa[];
  };
}