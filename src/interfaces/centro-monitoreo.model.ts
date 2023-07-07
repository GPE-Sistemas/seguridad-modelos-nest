import { ICliente } from "./cliente";
import { ICoordenadas } from "./generales/coordenadas";
import { GeoJSONType } from "./vecinos/vecino.model";

export interface ICentroMonitoreo {
  _id: string;
  nombre: string;
  ubicacion: ICoordenadas;
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: "Point";
    coordinates: [number, number];
  };
  idCliente: string;
  // Virtuals
  cliente?: ICliente;
}
