import { ICategoria } from '..';
import { ICoordenadas } from './generales/coordenadas';

export interface ICategoriaCliente {
  imagenArriba?: string;
  imagenAbajo?: string;
  idCategoria: string;
  // Virtuals
  categoria?: ICategoria;
}

export interface IImagenesCliente {
  icono: string;
  lateral: string;
  arriba: string;
  abajo: string;
  fondo?: string;
}

export interface ICliente {
  _id: string;
  activo: boolean;
  admin: boolean;
  coordenadas: ICoordenadas[][];
  superficie?: number;
  fechaCreacion: string;
  nombre: string;
  edadMinima: number;
  twitter: string;
  instagram: string;
  sirenas: boolean;
  categorias?: ICategoriaCliente[];
  imagenes: IImagenesCliente;
  idCategoriaDefault?: string;
  configuracion?: { verActualizaciones: boolean };

  // Virtuals
  categoriaDefault?: ICategoria;
}
