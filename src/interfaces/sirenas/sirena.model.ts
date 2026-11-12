import {
  IBarrio,
  ICliente,
  IConfigSirena,
  ICoordenadas,
  ILocalidad,
  ISim,
} from '../..';
import { HwSirena } from './firmware-sirena.model';

export type ModeloSirena = 'NAC' | 'Avatis' | 'Alarcom';

export interface ISirena {
  _id?: string;
  fechaCreacion?: string;
  versionFirmware?: string;
  chipId?: string;
  /**
   * Si la sirena se puede usar
   */
  activa?: boolean;
  /**
   * Si la sirena esta conectada al websocket
   */
  online?: boolean;
  /**
   * Ubicacion reportada por la sirena y direccion calculada
   */
  ubicacionGps?: ICoordenadas;
  direccionGps?: string;
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: 'Point';
    coordinates: [number, number];
  };
  /**
   * Ubicacion cargada manualmente y direccion calculada
   */
  ubicacionManual?: ICoordenadas;
  direccionManual?: string;
  idLocalidad?: string;
  idBarrio?: string;
  /**
   * Cliente determinado por la ubicacion
   */
  idCliente?: string;
  /**
   * Si tiene la luz encendida
   */
  luzEncendida?: boolean;
  /**
   * Si está sonando
   */
  sonidoEncendido?: boolean;

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

  /**
   * Modelo físico de la sirena
   * NAC - Avatis - Alarcom - ETC
   */
  modeloSirena?: ModeloSirena;

  // configs de la sirena
  configs?: IConfigSirena;

  /**
   * Volumen de sirenas, pánico y audios grabados del NAC32, 0 a 100 (%). Es el que confirmó la placa
   * (VOLUMEN_CONFIGURADO o AUTH_SIRENA), no el pedido.
   */
  volumenSirena?: number;
  /** Volumen del perifoneo del NAC32, 0 a 100 (%). Confirmado por la placa. */
  volumenVoz?: number;
  /** Cuándo llegó el último VOLUMEN_CONFIGURADO */
  fechaVolumen?: string;

  /** Hardware de la placa que informa el AUTH (NAC32 nuevo: 'v2'). Sin dato = v1. Define qué firmware se le manda. */
  hw?: HwSirena;
  /** Chip que informa el AUTH (NAC32 nuevo: 'esp32s3') */
  chip?: string;

  // Virtuals
  cliente?: ICliente;

  sim?: ISim;

  localidad?: ILocalidad;

  barrio?: IBarrio;
}
