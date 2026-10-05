import { GeoJSONType, ICoordenadas } from '../../auxiliares/coordenadas';
import { DireccionV2 } from '../../auxiliares/direccionV2';
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
  /**
   * @deprecated Sin equivalente en ConfigVecino: cada cliente tiene su propia config
   * (`IConfigVecino.idCliente`). Usar `idCliente` (un alta por cliente).
   */
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

/**
 * Re-exports por compatibilidad: `IUpdateDomicilioVecino` e `IResumenVecinosPorCliente`
 * viven ahora en `config-vecino.ts` (operan sobre ConfigVecino, no sobre la colección vecinos).
 */
export type {
  IUpdateDomicilioVecino,
  IResumenVecinosPorCliente,
} from '../config-vecino';
