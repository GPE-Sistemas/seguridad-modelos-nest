import { ICoordenadasInput } from "../../auxiliares/coordenadas";
import { GeoJSONType } from "../vecinos/vecino.model";

export interface ICrearCentroMonitoreoInput {
  nombre: string;
  ubicacion: ICoordenadasInput;
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: "Point";
    coordinates: [number, number];
  };
  idCliente: string;
}

export interface IUpdateCentroMonitoreoInput {
  nombre?: string;
  ubicacion?: ICoordenadasInput;
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: "Point";
    coordinates: [number, number];
  };
}

export interface INuevoCentroMonitoreoInput {
  nombre: string;
  ubicacion: ICoordenadasInput;
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: "Point";
    coordinates: [number, number];
  };
}