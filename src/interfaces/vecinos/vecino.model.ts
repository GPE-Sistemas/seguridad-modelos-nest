import { DireccionV2, IBarrio, ICoordenadas, ILocalidad } from '../..';
import { ICliente } from '../cliente.model';
import { ICategoriaVecino } from './categoria-vecino.model';
import { IEnvioCodigo } from './envio-codigo.dto';

// TODO: implementar para que el vecino autorice los permisos de envio de multimedia con las alertas
export interface IPrivacidad {
  audio: boolean;
  video: boolean;
  foto: boolean;
  ubicacion: boolean;
}

export interface IVecino {
  _id: string;
  activo: boolean;
  fechaCreacion: string;
  creadoPorAdmin: boolean;
  importado?: boolean;
  dniEscaneado?: boolean;
  nombre: string;
  dni: string;
  sexo?: boolean | null;
  idCliente: string;
  email?: string;
  idLocalidad?: string;
  idBarrio?: string;
  /**
   * @deprecated Esta propiedad se reemplazó por 'DireccionV2'
   */
  direccion: string;
  direccionV2?: DireccionV2;
  /**
   * @deprecated Esta propiedad se reemplazó por 'DireccionV2'
   */
  ubicacionDireccion?: ICoordenadas;
  complementoDireccion?: string;
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: GeoJSONType;
    coordinates: number[];
  };
  pais: string;
  telefono: string;
  fechaNacimiento: string;
  envioCodigo?: IEnvioCodigo;
  categoria?: ICategoriaVecino;
  ultimoAcceso?: string;
  tokenPush?: string;
  idSmartCity?: string;
  // Virtuals
  cliente?: ICliente;
  localidad?: ILocalidad;
  barrio?: IBarrio;
}

export type GeoJSONType =
  | 'Point'
  | 'LineString'
  | 'Polygon'
  | 'MultiPoint'
  | 'MultiLineString'
  | 'MultiPolygon'
  | 'GeometryCollection';
