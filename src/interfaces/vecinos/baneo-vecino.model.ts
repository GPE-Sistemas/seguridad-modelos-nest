import { ICliente } from "../cliente";
import { IUsuario } from "../usuario/schema";
import { IVecino } from "./vecino.model";

export interface IBaneoVecino {
  _id?: string;
  desde?: string;
  hasta?: string;
  idCliente?: string;
  idVecino?: string;
  tipo?: string; // 'sirenas' | 'alertas'
  idUsuario?: string;
  // Virtuals
  cliente?: ICliente;
  vecino?: IVecino;
  usuario?: IUsuario;
}
