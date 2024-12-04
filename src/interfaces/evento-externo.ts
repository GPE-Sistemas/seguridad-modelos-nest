import { ICoordenadas } from "../../auxiliares/coordenadas";
import { IBarrio } from "../barrio";
import { ILocalidad } from "../localidades";
import { ICliente } from "../cliente";

export interface IEventoExterno {
  _id?: string;
  fecha?: string;
  descripcion?: string;
  idCliente?: string;
  idLocalidad?: string;
  idBarrio?: string;

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
