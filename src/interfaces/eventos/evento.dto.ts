import { ICoordenadas } from '../generales/coordenadas';

export interface ICrearEvento {
  idCliente?: string;
  observaciones?: string;
  fecha: string;
  emisor?: string;
  categoria: string;
  tags: string[];
  direccion?: string;
  coordenadas?: ICoordenadas;
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: 'Point';
    coordinates: [number, number];
  };
  victima?: string;
  causante?: string;
  idVecino?: string;
  idAlerta?: string;
}

export interface IUpdateEvento {
  observaciones?: string;
  fecha?: string;
  emisor?: string;
  categoria?: string;
  tags?: string[];
  direccion?: string;
  coordenadas?: ICoordenadas;
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: 'Point';
    coordinates: [number, number];
  };
  victima?: string;
  causante?: string;
  idVecino?: string;
  idAlerta?: string;
}
