import { ICoordenadas } from '../..';
import { Estados } from './alerta-estado.dto';
import { IAlertaEstado } from './alerta-estado.model';
import { IAlertaMedia } from './alerta-media.model';
import { IAlertaUbicacion } from './alerta-ubicacion.model';
import { IAlerta } from './alerta.model';

// Lo que envia el frontend
export interface INuevaAlerta {
  ubicacion?: ICoordenadas;
  idBoton: string;
  formulario?: { [label: string]: any };
}

// Lo que se le envia al servicio de datos
export interface ICrearAlerta {
  idCliente: string;
  ubicacion: ICoordenadas;
  geojson?: {
    type: 'Point';
    coordinates: [number, number];
  };
  direccion: string;
  /**
   * @deprecated se usa idConfigVecino
   */
  idVecino?: string;
  idConfigVecino: string;
  idsCentrosMonitoreo: string[];
  idCentroDerivado?: string;
  idZona: string;
  idBoton: string;
  idLocalidad?: string;
  idBarrio?: string;
  idPunto?: string;
  idCategoria: string;
  prioridad: number;
  estadoActual?: Estados;
  activa?: boolean;
  //
  tipo?: 'Emergencia' | 'Evento';
  idGrupo?: string; // Agrupacion de vecinos que la pueden ver (barrios cerrados y autogestion de alertas)
  // Para eventos
  formulario?: Record<string, any>; // Formulario de datos del evento
}

export interface IUpdateAlerta {
  activa?: boolean;
  estadoActual?: Estados;
  idUsuario?: string;
  tiempoRespuesta?: number;
  tiempoResolucion?: number;
  idCentroDerivado?: string;
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
