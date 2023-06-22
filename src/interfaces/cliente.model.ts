import { GeoJSONType, ICategoria } from '..';
import { ICoordenadas } from './generales/coordenadas';

export interface ICategoriaCliente {
  imagenArriba?: string;
  imagenAbajo?: string;
  idCategoria: string;
  imagenSirena?: string;
  imagenReflector?: string;
  imagenAdelante?: string;
  imagenAtras?: string;
  imagenSirenaPush?: string;
  imagenReflectorPush?: string;
  imagenAdelantePush?: string;
  imagenAtrasPush?: string;
  imagenFondo?: string;
  // virtual
  categoria?: ICategoria;
}

export interface IImagenesCliente {
  icono?: string;
  lateral?: string;
  arriba?: string;
  abajo?: string;
  fondo?: string;
  sirena?: string;
  reflector?: string;
  adelante?: string;
  atras?: string;
  sirenaPush?: string;
  reflectorPush?: string;
  adelantePush?: string;
  atrasPush?: string;
}

export interface ICliente {
  _id: string;
  activo: boolean;
  admin: boolean;
  coordenadas: ICoordenadas[][];
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: GeoJSONType;
    coordinates: [number, number] | [number, number][];
  };
  superficie?: number;
  fechaCreacion: string;
  nombre: string;
  edadMinima: number;
  twitter: string;
  instagram: string;
  sirenas: boolean;
  categorias?: ICategoriaCliente[];
  imagenes: IImagenesCliente;
  idCategoriaDefault?: string;
  categoriasDefault?: { desde: number; hasta: number; idCategoria: string }[];
  configuracion?: IConfigCliente;
  // Virtuals
  categoriaDefault?: ICategoria;
}

export interface IConfigCliente {
  verActualizaciones?: boolean;
  categoriasDeEvento?: string[];
  tagsDeEvento?: string[];
  nombreAppMonit?: string;
  actualizacionesFirmware?: boolean;
  cronLimiteSirenasPor100?: number;
  cronLimiteSirenasMax?: number;
  hostSmartCity?: string;
  //COLORES
  colorInstalar?: string;
  colorMenu?: string;
}
