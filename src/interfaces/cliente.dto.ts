import { ICoordenadasInput } from "./generales/coordenadas";

export interface ICrearCategoriaClienteInput {
  imagenArriba?: string;
  imagenAbajo?: string;
  idCategoria: string;
}

export interface IImagenesClienteInput {
  icono: string;
  lateral: string;
  arriba: string;
  abajo: string;
}

export interface ICrearClienteInput {
  nombre: string;
  admin?: boolean;
  edadMinima?: number;
  twitter?: string;
  sirenas?: boolean;
  categorias: ICrearCategoriaClienteInput[];
  coordenadas: ICoordenadasInput[][];
  imagenes: IImagenesClienteInput;
  idCategoriaDefault?: string;
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
  idCategoriaDefault?: string;
}

export interface IResumenClientes {
  cliente: string;
  cantidadUsuarios: number;
  cantidadVecinos: number;
  cantidadAlertas: number;
  cantidadSirenas: number;
  cantidadControles: number;
}
