import { ICoordenadasInput } from './coordenadas';

export interface ICrearClienteInput {
  nombre: string;
  admin?: boolean;
  edadMinima?: number;
  twitter?: string;
  idsCategorias: string[];
  coordenadas: ICoordenadasInput[][];
}

export interface IUpdateClienteInput {
  nombre?: string;
  admin?: boolean;
  edadMinima?: number;
  twitter?: string;
  idsCategorias?: string[];
  coordenadas?: ICoordenadasInput[][];
}
