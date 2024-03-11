import {
  DireccionV2,
  IBarrio,
  ICliente,
  ICoordenadas,
  ILocalidad,
} from '../..';
import { ICategoriaVecino } from './categoria-vecino.model';
import { IEnvioCodigo } from './envio-codigo.dto';
import { IConfigNotificacion } from './config-notificaciones';

// TODO: implementar para que el vecino autorice los permisos de envio de multimedia con las alertas
export interface IPrivacidad {
  audio: boolean;
  video: boolean;
  foto: boolean;
  ubicacion: boolean;
}

/**
 * @deprecated
 * AHORA SE USA CONFIGVECINO
 */
export interface IVecino {
  _id?: string;
  // IVECINO DE VERDAD
  nombre?: string;
  dni?: string;
  sexo?: boolean | null;
  email?: string;
  pais?: string;
  telefono?: string;
  fechaNacimiento?: string;
  idsCliente?: string[];
  // Quizás
  activo?: boolean;
  fechaCreacion?: string;
  creadoPorAdmin?: boolean;
  importado?: boolean;
  dniEscaneado?: boolean;
}

type OmitirCreate = '_id';

export interface ICrearVecino extends Omit<Partial<IVecino>, OmitirCreate> {}

type OmitirUpdate = '_id';

export interface IUpdateVecino extends Omit<Partial<IVecino>, OmitirUpdate> {}

export type GeoJSONType =
  | 'Point'
  | 'LineString'
  | 'Polygon'
  | 'MultiPoint'
  | 'MultiLineString'
  | 'MultiPolygon'
  | 'GeometryCollection';
