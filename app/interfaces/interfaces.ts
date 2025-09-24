export interface Credentials{
    Username: string;
    Password: string
  }

  export interface Activity{
    IdActividad: number | undefined;
    IdPrograma: number | 0;
    Texto: string | '';
};

export interface Conditions{
    IdCondicion: number | undefined;
    IdPrograma: number | 0;
    Texto: string | '';
};
export interface Destiny{
    IdDestino : number | undefined;
    IdPais: number | 0;
    IdArea: number | 0;
    Pais: string | '';
    CodigoDestino: string | '';
    Nombre: string;
    Activo: boolean | false;
    Att:boolean | false;
    UrlImage: string | '';
    IdImageCloudinary:string | '';
};
export interface Hotels{
    IdHotel: number | undefined;
    IdDestino: number | 0;
    Nombre: string | '';
    Url: string | '';
};
export interface Incluye{
    IdIncluye: number | undefined;
    IdPrograma: number | 0;
    Texto: string | '';
};
export interface Itinerario{
    IdItinerario: number| 0;
    IdPrograma: number | 0;
    Dia: number | 0;
    Actividad: string | '';
    Cuerpo: string | '';
    Tipo: string | '';
};

export interface Include{
    IdIncluye: number | undefined;
    IdPrograma: number | 0;
    Texto: string | '';
};

export interface Program{
    IdPrograma: number | 0;
    IdPais: number | 0;
    IdDestino: number | 0;
    Titulo: string | '';
    Subtitulo: string | '';
    Texto: string | '';
    Dias: number | 0;
    Noches: number | 0;
    IdImageCloudinary: string | '';
    UrlImage: string | '';
    Precio: number | 0;
    Video: string | '';
    Activo: boolean | false;
    Oferta: boolean | false;
    Vigencia: string | '';
    Operador: string | '';
    Sigla: string | '';
    Aerolinea: string | '';     
    Incluyes: Include[] | [];
    Itinerarios: Itinerario[] | [];
    Vuelos: Bloqueos[] | [];
    ValoresProgramas: ValueProgram[] | [];
    Condiciones: Conditions[] | [];
    Actividades: Activity[] | [];
    Att: boolean | false;
};
export interface Flight{
    IdVuelo: number | undefined;
    IdPrograma: number | 0;
    Vuelo: string | '';
    Ruta: string | '';
    Sale: string | '';
    Llega: string | '';
    Salidas: number | '';
    TextoFecha: string | '';
    
};


export interface ValueProgram{
    IdValor: number | 0;
    IdHotel: number | 0;
    Hotel: string | '';
    IdPrograma: number | 0;
    Habitacion: string | '';
    Precio: number | 0;
    Text: string | '';
};



  export interface ResponseExchange {
   CambioContado:number;
    CambioCredito:number;
    DateUp:string;
    FechaDesde:string;
    FechaHasta:string;
    Id:number;
    UserId:number;
};

  export interface ApiResponse<T>{
    statusCode:number;
    value:{entity:T};
  }

  export interface ApiResponses<T>{
    statusCode:number;
    value:{entities:T};
  }

  export interface ApiListResponse<T>{
    statusCode:number;
    value:{entities:T};
  }
export interface ApiResponseAuth{
	statusCode:number;
	value:string;
}

  export interface ApiResponseExchange<T>{
	data:T;
  }



  export interface ListaAreaDestinos{
    Id: number;
    IdArea: number;
    IdDestino: number;
};
  
  export interface Area{
    IdArea: number | undefined;
    ListaDestinos: ListaAreaDestinos[] | [];
    Pais: string | 0;
    CodigoPais?: string | '';
    Nombre: string;
    Activo: boolean | false;
    Att:boolean | false;
    UrlImage: string | '';
    IdImageCloudinary: string | '';
};

export interface Bloqueos	{
				Id: number | undefined,
				IdPrograma: number,
				TextoFecha: string,
				Activo: boolean,
				FechaActualizacion: Date,
				IdUsuario: number,
				Detalle: Detalle[]
};

export interface Detalle{
						Id: number | undefined,
						IdBloqueo: number | undefined,
						Correlativo: number | 0,
						Vuelo: string | undefined,
						Ruta: string | undefined,
						Sale: string | undefined,
						Llega: string | undefined,
						Activo: boolean | undefined,
						FechaActualizacion: Date | undefined,
						IdUsuario: number | undefined
					}