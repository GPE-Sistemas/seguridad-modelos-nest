import { GeoJSONType, ICoordenadas } from '../..';
import { IAlerta } from './alerta.model';

export interface IAlertaUbicacion {
  _id: string;
  idAlerta: string;
  idCliente?: string;
  fecha: string;
  ubicacion: ICoordenadas;
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: 'Point';
    coordinates: [number, number];
  };
  direccion: string;
  // Virtuals
  alerta?: IAlerta;
}
