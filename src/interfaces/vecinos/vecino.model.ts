import {
  DireccionV2,
  IBarrio,
  ICliente,
  ICoordenadas,
  ILocalidad,
} from "../..";
import { ICategoriaVecino } from "./categoria-vecino.model";
import { IEnvioCodigo } from "./envio-codigo.dto";
import { IConfigNotificacion } from "./config-notificaciones";

// TODO: implementar para que el vecino autorice los permisos de envio de multimedia con las alertas
export interface IPrivacidad {
  audio: boolean;
  video: boolean;
  foto: boolean;
  ubicacion: boolean;
}

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
  // Pasadas a ConfigVecino
  idCliente?: string;
  idLocalidad?: string;
  idBarrio?: string;
  direccion?: string;
  direccionV2?: DireccionV2;
  ubicacionDireccion?: ICoordenadas;
  complementoDireccion?: string;
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: GeoJSONType;
    coordinates: [number, number] | [number, number][];
  };

  envioCodigo?: IEnvioCodigo;
  categoria?: ICategoriaVecino;
  ultimoAcceso?: string;
  tokenPush?: string;
  idSmartCity?: string;
  appVersion?: string;
  app?: string;
  appType?: string;

  // Configs
  configs?: IConfigNotificacion;

  // Virtuals
  cliente?: ICliente;
  localidad?: ILocalidad;
  barrio?: IBarrio;
}

export type GeoJSONType =
  | "Point"
  | "LineString"
  | "Polygon"
  | "MultiPoint"
  | "MultiLineString"
  | "MultiPolygon"
  | "GeometryCollection";
