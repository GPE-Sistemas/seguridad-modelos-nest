import { Categoria } from './categoria.model';
import { Coordenadas } from './coordenadas';

export class Cliente {
  _id: string;
  activo: boolean;
  admin: boolean;
  coordenadas: Coordenadas[][];
  fechaCreacion: string;
  nombre: string;
  edadMinima: number;
  twitter: string;
  sirenas: boolean;
  idsCategorias: string[];
  // Virtuals
  categorias: Categoria[];
}
