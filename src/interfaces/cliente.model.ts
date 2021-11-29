import { ICategoriaCliente } from './categoria-cliente.model';
import { ICoordenadas } from './coordenadas';
import { IImagenesCliente } from './imagenes-cliente';

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
  categorias?: ICategoriaCliente[];
  imagenes: IImagenesCliente;
}
