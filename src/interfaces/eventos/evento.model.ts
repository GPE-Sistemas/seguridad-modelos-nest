import { IAlerta } from '../alertas/alerta.model';
import { ICoordenadas } from '../../auxiliares/coordenadas';
import { IVecino } from '../vecinos/vecino.model';
import { IConfigVecino } from '../config-vecino';

export interface IEvento {
  _id?: string;
  idCliente?: string;
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
  /**
   * @deprecated se usa idConfigVecino
   */
  idVecino?: string;
  idConfigVecino?: string;
  idAlerta?: string;
  observaciones?: string;
  victima?: string;
  causante?: string;
  // Virtuals
  vecino?: IVecino;
  configVecino?: IConfigVecino;
  alerta?: IAlerta;
}
