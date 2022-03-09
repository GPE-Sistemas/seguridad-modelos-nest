import { ICliente } from "../cliente.model";

export interface IEstadoSirena {
  _id: string;
  chipId: string;
  fechaOnline: string;
  fechaOffline?: string;
  tiempoAcumuladoOnline?: number;
  tiempoAcumuladoOffline?: number;
  idCliente?: string;
  rssi?: number;
  ber?: number;

  // Virtuals
  cliente?: ICliente;
}
