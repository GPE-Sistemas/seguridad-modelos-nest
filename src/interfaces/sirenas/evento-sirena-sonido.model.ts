import { ICliente } from "../cliente.model";
import { IVecino } from "../vecino.model";

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
