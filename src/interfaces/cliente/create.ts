import { ICategoriaCliente, IConfigCliente, IImagenesCliente } from './schema';
import { ICoordenadas } from '../../auxiliares/coordenadas';

export interface ICrearClienteInput {
  nombre: string;
  nombreAppMobile?: string;
  admin?: boolean;
  edadMinima?: number;
  twitter?: string;
  instagram?: string;
  sirenas?: boolean;
  categorias: ICategoriaCliente[];
  coordenadas?: ICoordenadas[][];
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: 'MultiPolygon';
    coordinates: [number, number][][][];
  };
  centro?: ICoordenadas;
  superficie?: number;
  imagenes: IImagenesCliente;
  idCategoriaDefault?: string;
  categoriasDefault?: { desde: number; hasta: number; idCategoria: string }[];
  configuracion?: IConfigCliente;
}
