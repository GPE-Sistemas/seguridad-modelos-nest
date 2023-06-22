import { ICentroMonitoreo } from './centro-monitoreo.model';
import { ICliente } from './cliente.model';
import { ICoordenadas } from './generales/coordenadas';
import { GeoJSONType } from './vecinos/vecino.model';

export interface IZona {
  _id: string;
  nombre: string;
  coordenadas: ICoordenadas[];
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: GeoJSONType;
    coordinates: [number, number] | [number, number][];
  };
  superficie?: number;
  idCliente: string;
  idsPrioridad: string[];
  // Virtuals
  cliente?: ICliente;
  centrosMonitoreo?: ICentroMonitoreo[];
}
