import { ICliente } from "../cliente.model";
import { IVecino } from "../..";

export interface IControl {
  _id: string;
  chipId: string;
  etiqueta?: string;
  fechaCreacion: string;
  idCliente?: string;
  idVecino?: string;
  baneado?: boolean;

  // Virtuals
  cliente?: ICliente;
  vecino?: IVecino;
}
