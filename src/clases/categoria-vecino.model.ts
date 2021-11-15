import { Categoria } from './categoria.model';

export class CategoriaVecino {
  desde: string;
  hasta?: string;
  idCategoria: string;
  idVecino: string;
  // Virtuals
  categoria?: Categoria;
  // vecino?: Vecino;
}
