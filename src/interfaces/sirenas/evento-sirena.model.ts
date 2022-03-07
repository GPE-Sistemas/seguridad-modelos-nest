import { IControl, IVecino } from "../..";
import { ICliente } from "../cliente.model";

export interface IEventoSirena {
  _id: string;
  chipId: string;
  fecha: string;
  encendida: boolean;
  idVecino: string;
  idCliente?: string;
  chipIdControl?: string;
  tiempoEstadoAnterior?: number;
  tiempoAcumuladoEncendido?: number;
  tiempoAcumuladoApagado?: number;
  tipo: string; // reflector | sirena
  origen: string; // app | control
  motivo?: string; // alerta | sirena

  // Virtuals
  vecino?: IVecino;
  cliente?: ICliente;
  control?: IControl;
}
