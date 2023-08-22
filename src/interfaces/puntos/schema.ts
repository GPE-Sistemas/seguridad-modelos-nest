import { IClient } from '../auth/client.model';
import { ICoordenadas } from '../generales/coordenadas';

export interface IPunto {
  _id?: string;
  // Datos
  tipo?: TipoDePunto; // 'Escuela'
  nombre?: string;
  descripcion?: string;
  areaDeCobertura?: number; // En metros
  geojson?: {
    type: 'Point'; //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
    coordinates: [number, number];
  };
  coordenadas?: ICoordenadas;
  // Tenant
  idCliente?: string;

  // Virtuals
  cliente?: IClient;
}

export type TipoDePunto =
  | 'Escuela'
  | 'Hospital'
  | 'Comisaría'
  | 'Bomberos'
  | 'Municipalidad'
  | 'Otros';
