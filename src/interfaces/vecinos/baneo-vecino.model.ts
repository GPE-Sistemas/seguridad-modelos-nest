import { ICliente } from "../cliente.model";
import { IUsuario } from "../usuario.model";
import { IVecino } from "./vecino.model";

export interface IBaneoVecino {
  desde: string;
  hasta: string;
  idCliente: string;
  idVecino: string;
  tipo: string; // 'sirenas' | 'alertas'
  idUsuario?: string;
  // Virtuals
  cliente?: ICliente;
  vecino?: IVecino;
  usuario?: IUsuario;
}
