import { ICrearCategoriaVecinoInput } from './categoria-vecino.dto';
import { ICoordenadas } from '../../auxiliares/coordenadas';
import { IEnvioCodigo } from './envio-codigo.dto';
import { DireccionV2, GeoJSONType, ICategoriaVecino } from '../..';
import { IConfigNotificacion } from './config-notificaciones';

export interface INuevoVecino {
  nombre?: string;
  dni?: string;
  sexo?: boolean;
  fechaNacimiento?: string;
  pais?: string;
  telefono?: string;
  email?: string;
  direccion?: string;
  // Id Cliente viene en el registro de la app barrios privados
  idCliente?: string;
  idsCliente?: string[];
  // Comentario proque me mershié al instante.
  direccionV2?: DireccionV2;
  complementoDireccion?: string;
  /**
   * La ubicacion solo es necesaria cuando el vecino se crea desde la app de boton por la propia persona
   */
  ubicacion?: ICoordenadas;
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: GeoJSONType;
    coordinates: [number, number] | [number, number][];
  };
  idSmartCity?: string;

  // Configs
  configs?: IConfigNotificacion;
}

export interface IUpdateDomicilioVecino {
  direccion?: string;
  direccionV2?: DireccionV2;
  complementoDireccion?: string;
  ubicacion?: ICoordenadas;
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: GeoJSONType;
    coordinates: [number, number] | [number, number][];
  };
}

// Resumen

export interface IResumenVecinosPorCliente {
  cliente: string;
  cantidad: number;
}

export interface IResumenVecinosPorCategoria {
  categoria: string;
  cantidad: number;
}

export interface IResumenVecinosPorSexo {
  sexo: boolean | null;
  cantidad: number;
}

export interface IUpdateVecinoDatos {
  nombre?: string;
  dni?: string;
  sexo?: boolean | null;
  fechaNacimiento?: string;
  pais?: string;
  telefono?: string;
  email?: string;
  idsCliente?: string[];
  /**
   * @deprecated Esta propiedad se reemplazó por 'DireccionV2'
   */
  direccion?: string;
  direccionV2?: DireccionV2;
  complementoDireccion?: string;
  ubicacion?: ICoordenadas;
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: GeoJSONType;
    coordinates: [number, number] | [number, number][];
  };
  idSmartCity?: string;

  // Configs
  configs?: IConfigNotificacion;
}
