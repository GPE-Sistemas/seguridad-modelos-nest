import { IUbicacion } from "../../auxiliares/ubicacion";
import { ILocalidad } from "../localidades/schema";

export interface IBarrio {
  _id: string;
  nombre?: string;
  ubicacion?: IUbicacion;
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: "Polygon";
    coordinates: [number, number][][];
  };
  idCliente?: string;
  idLocalidad?: string;
  // Populate
  localidad?: ILocalidad;
}

export interface ICreateBarrio {
  nombre?: string;
  ubicacion?: IUbicacion;
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: "Polygon";
    coordinates: [number, number][][];
  };
  idCliente?: string;
  idLocalidad?: string;
}

export interface IUpdateBarrio {
  nombre?: string;
  ubicacion?: IUbicacion;
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: "Polygon";
    coordinates: [number, number][][];
  };
  idCliente?: string;
  idLocalidad?: string;
}
