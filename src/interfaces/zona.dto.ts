import { ICoordenadasInput } from './generales/coordenadas';
import { GeoJSONType } from './vecinos/vecino.model';

export interface ICrearZonaInput {
  nombre: string;
  coordenadas: ICoordenadasInput[];
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: 'Polygon';
    coordinates: [number, number][][];
  };
  superficie?: number;
  idCliente: string;
  idsPrioridad: string[];
}

export interface IUpdateZonaInput {
  nombre?: string;
  coordenadas?: ICoordenadasInput[];
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: 'Polygon';
    coordinates: [number, number][][];
  };
  superficie?: number;
  idsPrioridad?: string[];
}

export interface INuevaZonaInput {
  nombre: string;
  coordenadas: ICoordenadasInput[];
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: 'Polygon';
    coordinates: [number, number][][];
  };
  superficie?: number;
  idsPrioridad: string[];
}
