import { ICliente } from '../cliente.model';
import { ICoordenadas, ISim } from '../..';

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
  /**
   * Ubicacion cargada manualmente y direccion calculada
   */
  ubicacionManual: ICoordenadas;
  direccionManual: string;
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
}
