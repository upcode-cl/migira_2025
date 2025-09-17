import axios from "axios"

import { ApiListResponse, ApiResponses,ApiResponse, Area, Destiny, Program, ResponseExchange } from "../interfaces/interfaces";



export const Exchange = async (): Promise<ResponseExchange> => {
  try {
    const EqualityFilter = {
      Take: 1,
      Sort:['Id DESC']
    };
   
    const result = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/Exchange/GetExchange`, EqualityFilter, {});
    const response = result.data.entities[0] as ResponseExchange;
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw error; // Lanza el error para que pueda ser manejado por quien llame a esta función
    } else {
      console.error('Unexpected error:', error);
      throw error;
    }
  }

};


export const Exchange2 = async (): Promise<ResponseExchange> => {
  try {
    const EqualityFilter = {
      Take: 1,
      Sort:['Id DESC']
    };
   
    const result = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/Exchange/GetExchange`, EqualityFilter, {});
    const response = result.data.entities[0] as ResponseExchange;
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw error; // Lanza el error para que pueda ser manejado por quien llame a esta función
    } else {
      console.error('Unexpected error:', error);
      throw error;
    }
  }

};

export const getProgramasDestacados = async (): Promise<ApiListResponse<Program[]>> => {
  try{
    const result = await axios.get(`${process.env.NEXT_PUBLIC_API_MIGIRA}/api/Migira/ProgramasDestacados`);
    const response = result.data as ApiListResponse<Program[]>;
    return response;
  }catch(error){
     if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw error; // Lanza el error para que pueda ser manejado por quien llame a esta función
    } else {
      console.error('Unexpected error:', error);
      throw error;
    }
  }
};

export const getPrograma = async (id:number) :Promise<ApiResponse<Program>> =>{
  try{
    const result = await axios.get(`${process.env.NEXT_PUBLIC_API_MIGIRA}/api/Migira/Programa/${id}`);
    const response = result.data as ApiResponse<Program>;
    return response;
  }catch(error){
     if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw error; // Lanza el error para que pueda ser manejado por quien llame a esta función
    } else {
      console.error('Unexpected error:', error);
      throw error;
    }
  }
};


// consumir areas

export const getAreas = async () :Promise<ApiListResponse<Area[]>> =>{
  try{
    const result = await axios.get(`${process.env.NEXT_PUBLIC_API_MIGIRA}/api/Migira/Areas`);
    const response = result.data as ApiListResponse<Area[]>;
    return response;
  }catch(error){
     if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw error; // Lanza el error para que pueda ser manejado por quien llame a esta función
    } else {
      console.error('Unexpected error:', error);
      throw error;
    }
  }
};

// consumir destinos 

export const getDestinos = async (id:number) :Promise<ApiListResponse<Destiny[]>> =>{
  try{
    const result = await axios.get(`${process.env.NEXT_PUBLIC_API_MIGIRA}/api/Migira/Destino/${id}`);
    const response = result.data as ApiListResponse<Destiny[]>;
    return response;
  }catch(error){
     if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw error; // Lanza el error para que pueda ser manejado por quien llame a esta función
    } else {
      console.error('Unexpected error:', error);
      throw error;
    }
  }
};


export const getProgramaDetalle = async (idPrograma:number,idDetalle:number) :Promise<ApiResponses<Program[]>> =>{
  try{
    const result = await axios.get(`${process.env.NEXT_PUBLIC_API_MIGIRA}/api/Migira/Programas/${idPrograma}/${idDetalle}`);
    const response = result.data as ApiResponses<Program[]>;
    return response;
  }catch(error){
     if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw error; // Lanza el error para que pueda ser manejado por quien llame a esta función
    } else {
      console.error('Unexpected error:', error);
      throw error;
    }
  }
};

export const getProgramaListadoDetalle = async (idPrograma:number,idDetalle:number) :Promise<ApiResponses<Program[]>> =>{
  try{
    const result = await axios.get(`${process.env.NEXT_PUBLIC_API_MIGIRA}/api/Migira/Programas/${idPrograma}/${idDetalle}`);
    const response = result.data as ApiResponses<Program[]>;
    return response;
  }catch(error){
     if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw error; // Lanza el error para que pueda ser manejado por quien llame a esta función
    } else {
      console.error('Unexpected error:', error);
      throw error;
    }
  }
};

  
export const getGiras = async () :Promise<ApiListResponse<Program[]>> =>{
  try{
    const result = await axios.get(`${process.env.NEXT_PUBLIC_API_MIGIRA}/api/Migira/Giras`);
    const response = result.data as ApiListResponse<Program[]>;
    return response;
  }catch(error){
     if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw error; // Lanza el error para que pueda ser manejado por quien llame a esta función
    } else {
      console.error('Unexpected error:', error);
      throw error;
    }
  }
};


export const getLujos = async () :Promise<ApiListResponse<Program[]>> =>{
  try{
    const result = await axios.get(`${process.env.NEXT_PUBLIC_API_MIGIRA}/api/Migira/Lujo`);
    const response = result.data as ApiListResponse<Program[]>;
    return response;
  }catch(error){
     if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw error; // Lanza el error para que pueda ser manejado por quien llame a esta función
    } else {
      console.error('Unexpected error:', error);
      throw error;
    }
  }
};


export const getCruceros = async () :Promise<ApiListResponse<Program[]>> =>{
  try{
    const result = await axios.get(`${process.env.NEXT_PUBLIC_API_MIGIRA}/api/Migira/Cruceros`);
    const response = result.data as ApiListResponse<Program[]>;
    return response;
  }catch(error){
     if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw error; // Lanza el error para que pueda ser manejado por quien llame a esta función
    } else {
      console.error('Unexpected error:', error);
      throw error;
    }
  }
};