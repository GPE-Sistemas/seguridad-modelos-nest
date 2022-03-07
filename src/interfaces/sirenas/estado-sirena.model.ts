import { ICliente } from "../cliente.model";

export interface IEstadoSirena {
  _id: string;
  chipId: string;
  fecha: string;
  online: boolean;
  idCliente?: string;
  tiempoEstadoAnterior?: number;
  tiempoAcumuladoOnline?: number;
  tiempoAcumuladoOffline?: number;
  rssi?: number;
  ber?: number;

  // Virtuals
  cliente?: ICliente;
}
