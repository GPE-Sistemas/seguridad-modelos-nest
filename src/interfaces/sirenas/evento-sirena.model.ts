import { IVecino } from "../..";
import { ICliente } from "../cliente.model";

export interface IEventoSirena {
  _id: string;
  chipId: string;
  fecha: string;
  encendida: boolean;
  idVecino: string;
  idCliente?: string;
  tipo: string; // reflector | sirena | alerta
  origen: string; // app | control

  // Virtuals
  vecino?: IVecino;
  cliente?: ICliente;
}
