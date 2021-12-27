import { ICategoria } from "../categoria.model";

export interface ICategoriaVecino {
  desde: string;
  hasta?: string;
  idCategoria: string;
  idVecino: string;
  // Virtuals
  categoria?: ICategoria;
  // vecino?: Vecino;
}
