import { ICoordenadas } from "../../auxiliares/coordenadas";
import { TipoDePunto } from "./schema";

export interface IUpdatePunto {
  tipo?: TipoDePunto; // 'Escuela'
  nombre?: string;
  descripcion?: string;
  areaDeCobertura?: number; // En metros
  geojson?: {
    type: "Point"; //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
    coordinates: [number, number];
  };
  coordenadas?: ICoordenadas;
  urlIcono?: string;
  // Tenant
  idCliente?: string;
}
