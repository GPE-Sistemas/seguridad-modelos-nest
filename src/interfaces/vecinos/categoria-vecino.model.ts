import { ICategoria } from "../categoria.model";
import { IUsuario } from "../usuario.model";
import { IVecino } from "./vecino.model";

export interface ICategoriaVecino {
  _id?: string;
  desde: string;
  hasta?: string;
  idCategoria: string;
  idVecino: string;
  idUsuario?: string;
  // Virtuals
  categoria?: ICategoria;
  vecino?: IVecino;
  usuario?: IUsuario;
}
