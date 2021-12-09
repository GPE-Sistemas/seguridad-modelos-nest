import { IImagenesClienteInput } from '..';
import { ICrearCategoriaClienteInput } from './categoria-cliente.inputs';
import { ICoordenadasInput } from './coordenadas';

export interface ICrearClienteInput {
  nombre: string;
  admin?: boolean;
  edadMinima?: number;
  twitter?: string;
  sirenas?: boolean;
  categorias: ICrearCategoriaClienteInput[];
  coordenadas: ICoordenadasInput[][];
  imagenes: IImagenesClienteInput;
}

export interface IUpdateClienteInput {
  activo?: boolean;
  nombre?: string;
  admin?: boolean;
  edadMinima?: number;
  twitter?: string;
  sirenas?: boolean;
  categorias?: ICrearCategoriaClienteInput[];
  coordenadas?: ICoordenadasInput[][];
  imagenes?: IImagenesClienteInput;
}

export interface IResumenClientes {
  cliente: string;
  cantidadUsuarios: number;
  cantidadVecinos: number;
  cantidadAlertas: number;
}
