import { ICliente } from '../cliente.model';
import { GeoJSONType, IBarrio, ICoordenadas, ILocalidad, ISim } from '../..';

export interface ISirena {
  _id: string;
  fechaCreacion: string;
  versionFirmware: string;
  chipId: string;
  /**
   * Si la sirena se puede usar
   */
  activa: boolean;
  /**
   * Si la sirena esta conectada al websocket
   */
  online: boolean;
  /**
   * Ubicacion reportada por la sirena y direccion calculada
   */
  ubicacionGps: ICoordenadas;
  direccionGps: string;
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: GeoJSONType;
    coordinates: [number, number] | [number, number][];
  };
  /**
   * Ubicacion cargada manualmente y direccion calculada
   */
  ubicacionManual: ICoordenadas;
  direccionManual: string;
  idLocalidad?: string;
  idBarrio?: string;
  /**
   * Cliente determinado por la ubicacion
   */
  idCliente: string;
  /**
   * Si tiene la luz encendida
   */
  luzEncendida: boolean;
  /**
   * Si está sonando
   */
  sonidoEncendido: boolean;

  iccidSim?: string;

  /**
   * Tiempo desde que se energizó hasta que se registró en el sistema
   */
  wakeup?: number;

  imei?: string;

  rssi?: number;

  ber?: number;

  actualizando?: boolean;

  fechaOnline?: string;

  fechaOffline?: string;

  instaladaEn?: string;

  acumuladoOnline?: number;

  acumuladoOffline?: number;

  acumuladoReflector?: number;

  acumuladoSirena?: number;

  errorSd?: string | null;

  errorActualizacion?: boolean;

  /**
   * Tipo de dispositivo para el frontend, solo puede ser Sirena o Tótem.
   */
  tipo?: string;

  /**
   * Datos varios de hw
   */

  datosHw?: {
    numeroNac?: string;
    version?: string;
    fuenteExterna?: boolean;
    fechaDeFabricacion?: string;
  };

  // Virtuals
  cliente?: ICliente;

  sim?: ISim;

  localidad?: ILocalidad;

  barrio?: IBarrio;
}
