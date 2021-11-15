import { ICategoria } from './categoria.model';
import { ICoordenadas } from './coordenadas';

export interface ICliente {
  _id: string;
  activo: boolean;
  admin: boolean;
  coordenadas: ICoordenadas[][];
  fechaCreacion: string;
  nombre: string;
  edadMinima: number;
  twitter: string;
  sirenas: boolean;
  idsCategorias: string[];
  // Virtuals
  categorias: ICategoria[];
}
