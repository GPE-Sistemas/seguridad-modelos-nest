import { IUbicacion } from '../auxiliares/ubicacion.model';
import { GeoJSONType } from '../vecinos/vecino.model';

export interface ILocalidad {
  _id: string;
  nombre?: string;
  ubicacion?: IUbicacion;
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: GeoJSONType;
    coordinates: [number, number] | [number, number][];
  };
  idCliente?: string;
}

export interface ICreateLocalidad {
  nombre?: string;
  ubicacion?: IUbicacion;
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: GeoJSONType;
    coordinates: [number, number] | [number, number][];
  };
  idCliente?: string;
}

export interface IUpdateLocalidad {
  nombre?: string;
  ubicacion?: IUbicacion;
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: GeoJSONType;
    coordinates: [number, number] | [number, number][];
  };
  idCliente?: string;
}
