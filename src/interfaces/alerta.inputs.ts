import { IAlertaEstado } from './alerta-estado.model';
import { IAlertaMedia } from './alerta-media.model';
import { IAlertaUbicacion } from './alerta-ubicacion.model';
import { IAlerta } from './alerta.model';
import { ICoordenadasInput } from './coordenadas';

export interface ICrearAlertaInput {
  idCliente: string;
  ubicacion: ICoordenadasInput;
  idVecino: string;
  idsCentrosMonitoreo: string[];
  idZona: string;
  idBoton: string;
  idCategoria: string;
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

export interface IAlertaDetalle {
  alerta: IAlerta;
  estados?: IAlertaEstado[];
  multimedia?: IAlertaMedia[];
  ubicaciones?: IAlertaUbicacion[];
}

export interface IResumenAlertasPorCliente {
  cliente: string;
  cantidad: number;
}
