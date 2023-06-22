import { GeoJSONType, ICoordenadasInput } from '../..';

export interface ICrearAlertaUbicacionInput {
  idAlerta: string;
  idCliente?: string;
  ubicacion: ICoordenadasInput;
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: 'Point';
    coordinates: [number, number];
  };
  direccion?: string;
}
