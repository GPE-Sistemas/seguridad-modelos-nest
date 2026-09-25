import { ICoordenadas } from "../auxiliares";
import { IBarrio } from "./barrio";
import { ICliente } from "./cliente";
import { ILocalidad } from "./localidades";

/**
 * Quién generó el evento externo, informado por el integrador.
 * La apikey identifica al cliente, pero varias entidades del origen pueden
 * compartir la misma (ej. todas las alarmas de un municipio).
 */
export interface IOrigenEventoExterno {
  /** Sistema que envía el evento, ej. 'gestion-alarmas' */
  sistema?: string;
  /** Id de la entidad que generó el evento en el sistema de origen (ej. id de la alarma) */
  idExterno?: string;
  /** Nombre legible de la entidad, ej. el nombre de la alarma */
  nombre?: string;
  /** Id del evento en el sistema de origen */
  idEvento?: string;
  /** Detalle libre, ej. partición y zona que detonó */
  detalle?: string;
}

export interface IEventoExterno {
  _id?: string;
  fecha?: string;
  descripcion?: string;
  idCliente?: string;
  idLocalidad?: string;
  idBarrio?: string;
  idApikey?: string;
  origen?: IOrigenEventoExterno;

  coordenadas?: ICoordenadas;
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: "Point";
    coordinates: [number, number];
  };

  // Virtuals
  cliente?: ICliente;
  localidad?: ILocalidad;
  barrio?: IBarrio;
}

type OmitirCreate = "_id" | "cliente" | "localidad" | "barrio";

export interface ICreateEventoExterno
  extends Omit<Partial<IEventoExterno>, OmitirCreate> {}

type OmitirUpdate = "_id" | "cliente" | "localidad" | "barrio";

export interface IUpdateEventoExterno
  extends Omit<Partial<IEventoExterno>, OmitirUpdate> {}
