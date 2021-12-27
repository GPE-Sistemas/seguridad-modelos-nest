import { IVecino } from "../..";
import { ICliente } from "../cliente.model";

export interface IEventoSirenaSonido {
  _id: string;
  chipId: string;
  fecha: string;
  encendida: boolean;
  idVecino: string;
  idCliente?: string;

  // Virtuals
  vecino?: IVecino;
  cliente?: ICliente;
}
