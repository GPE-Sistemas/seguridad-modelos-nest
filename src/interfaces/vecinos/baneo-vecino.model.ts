import { ICliente } from "../cliente.model";
import { IVecino } from "./vecino.model";

export interface IBaneoVecino {
  desde: string;
  hasta: string;
  idCliente: string;
  idVecino: string;
  tipo: string; // 'sirenas' | 'alertas'
  // Virtuals
  cliente?: ICliente;
  vecino?: IVecino;
}
