import {
  ICategoriaCliente,
  IConfigCliente,
  IImagenesCliente,
} from './cliente.model';
import { ICoordenadasInput } from './generales/coordenadas';

export interface ICrearClienteInput {
  nombre: string;
  admin?: boolean;
  edadMinima?: number;
  twitter?: string;
  instagram?: string;
  sirenas?: boolean;
  categorias: ICategoriaCliente[];
  coordenadas: ICoordenadasInput[][];
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: 'Polygon';
    coordinates: [number, number][];
  };
  superficie?: number;
  imagenes: IImagenesCliente;
  idCategoriaDefault?: string;
  categoriasDefault?: { desde: number; hasta: number; idCategoria: string }[];
  configuracion?: IConfigCliente;
}

export interface IUpdateClienteInput {
  activo?: boolean;
  nombre?: string;
  admin?: boolean;
  edadMinima?: number;
  twitter?: string;
  instagram?: string;
  sirenas?: boolean;
  categorias?: ICategoriaCliente[];
  coordenadas?: ICoordenadasInput[][];
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: 'Polygon';
    coordinates: [number, number][];
  };
  superficie?: number;
  imagenes?: IImagenesCliente;
  idCategoriaDefault?: string;
  categoriasDefault?: { desde: number; hasta: number; idCategoria: string }[];
  configuracion?: IConfigCliente;
}

export interface IResumenClientes {
  cliente: string;
  cantidadUsuarios: number;
  cantidadVecinos: number;
  cantidadAlertas: number;
  cantidadSirenas: number;
  cantidadControles: number;
}
