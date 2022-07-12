import { ICoordenadasInput } from './generales/coordenadas';

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
  fondo?: string;
}

export interface ICrearClienteInput {
  nombre: string;
  admin?: boolean;
  edadMinima?: number;
  twitter?: string;
  instagram?: string;
  sirenas?: boolean;
  categorias: ICrearCategoriaClienteInput[];
  coordenadas: ICoordenadasInput[][];
  superficie?: number;
  imagenes: IImagenesClienteInput;
  idCategoriaDefault?: string;
  configuracion: { verActualizaciones: boolean };
}

export interface IUpdateClienteInput {
  activo?: boolean;
  nombre?: string;
  admin?: boolean;
  edadMinima?: number;
  twitter?: string;
  instagram?: string;
  sirenas?: boolean;
  categorias?: ICrearCategoriaClienteInput[];
  coordenadas?: ICoordenadasInput[][];
  superficie?: number;
  imagenes?: IImagenesClienteInput;
  idCategoriaDefault?: string;
  configuracion: { verActualizaciones: boolean };
}

export interface IResumenClientes {
  cliente: string;
  cantidadUsuarios: number;
  cantidadVecinos: number;
  cantidadAlertas: number;
  cantidadSirenas: number;
  cantidadControles: number;
}
