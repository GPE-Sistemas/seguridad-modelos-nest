import { ICliente } from "../cliente.model";
import { IVecino } from "../..";

export interface IControl {
  _id: string;
  chipId: string;
  fechaCreacion: string;
  idCliente?: string;
  idVecino?: string;

  // Virtuals
  cliente?: ICliente;
  vecino?: IVecino;
}
