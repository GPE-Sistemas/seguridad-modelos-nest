import { IImagenesClienteInput } from '..';
import { ICoordenadasInput } from './coordenadas';

export interface ICrearClienteInput {
  nombre: string;
  admin?: boolean;
  edadMinima?: number;
  twitter?: string;
  idsCategorias: string[];
  coordenadas: ICoordenadasInput[][];
  imagenes: IImagenesClienteInput;
}

export interface IUpdateClienteInput {
  nombre?: string;
  admin?: boolean;
  edadMinima?: number;
  twitter?: string;
  idsCategorias?: string[];
  coordenadas?: ICoordenadasInput[][];
  imagenes?: IImagenesClienteInput;
}
