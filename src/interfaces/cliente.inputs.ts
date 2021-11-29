import { IImagenesClienteInput } from '..';
import { ICrearCategoriaClienteInput } from './categoria-cliente.inputs';
import { ICoordenadasInput } from './coordenadas';

export interface ICrearClienteInput {
  nombre: string;
  admin?: boolean;
  edadMinima?: number;
  twitter?: string;
  categorias: ICrearCategoriaClienteInput[];
  coordenadas: ICoordenadasInput[][];
  imagenes: IImagenesClienteInput;
}

export interface IUpdateClienteInput {
  nombre?: string;
  admin?: boolean;
  edadMinima?: number;
  twitter?: string;
  categorias?: ICrearCategoriaClienteInput[];
  coordenadas?: ICoordenadasInput[][];
  imagenes?: IImagenesClienteInput;
}
