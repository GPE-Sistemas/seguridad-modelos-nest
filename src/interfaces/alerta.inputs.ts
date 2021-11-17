import { ICoordenadasInput } from './coordenadas';

export interface ICrearAlertaInput {
  idCliente: string;
  ubicacion: ICoordenadasInput;
  idVecino: string;
  idsCentrosMonitoreo: string[];
  idZona: string;
  prioridad: number;
}

export interface IUpdateAlertaInput {
  activa?: boolean;
  estadoActual?: string;
  idUsuario?: string;
  tiempoRespuesta?: number;
}

export interface IAlertaNuevaInput {
  ubicacion: ICoordenadasInput;
  idBoton: string;
}
