import { ICategoria } from './categoria.model';

export interface ICategoriaCliente {
  imagenArriba?: string;
  imagenAbajo?: string;
  idCategoria: string;
  // Virtuals
  categoria?: ICategoria;
}
