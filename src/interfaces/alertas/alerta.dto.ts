import { ICoordenadasInput } from '../..';
import { estados } from './alerta-estado.dto';
import { IAlertaEstado } from './alerta-estado.model';
import { IAlertaMedia } from './alerta-media.model';
import { IAlertaUbicacion } from './alerta-ubicacion.model';
import { IAlerta } from './alerta.model';

// Lo que envia el frontend
export interface INuevaAlerta {
  ubicacion: ICoordenadasInput;
  idBoton: string;
}

// Lo que se le envia al servicio de datos
export interface ICrearAlerta {
  idCliente: string;
  ubicacion: ICoordenadasInput;
  direccion: string;
  idVecino: string;
  idsCentrosMonitoreo: string[];
  idZona: string;
  idBoton: string;
  idCategoria: string;
  prioridad: number;
}

export interface IUpdateAlerta {
  activa?: boolean;
  estadoActual?: estados;
  idUsuario?: string;
  tiempoRespuesta?: number;
  tiempoResolucion?: number;
}

export interface IDetalleAlerta {
  alerta: IAlerta;
  estados?: IAlertaEstado[];
  multimedia?: IAlertaMedia[];
  ubicaciones?: IAlertaUbicacion[];
}

// Resumenes

export interface IResumenAlertasPorFecha {
  fecha: string;
  cantidad: number;
}

export interface IResumenAlertasPorCliente {
  cliente: string;
  cantidad: number;
}

export interface IResumenAlertasPorVecino {
  vecino: string;
  sexo: boolean;
  edad: number;
  cantidad: number;
}

export interface IResumenAlertasPorUsuario {
  usuario: string;
  tiempoRespuesta: number;
  cantidad: number;
}

export interface IResumenAlertasPorCentroMonitoreo {
  centroMonitoreo: string;
  tiempoRespuesta: number;
  cantidad: number;
}

export interface IResumenAlertasPorZona {
  zona: string;
  cantidad: number;
}

export interface IResumenAlertasPorBoton {
  boton: string;
  cantidad: number;
}

export interface IResumenAlertasPorCategoria {
  categoria: string;
  cantidad: number;
}
