import { ICliente } from '../cliente.model';
import { ICoordenadas } from '../..';

export interface ISirena {
  _id: string;
  fechaCreacion: string;
  chipId: string;
  /**
   * Si la sirena se puede usar
   */
  activa: boolean;
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
  idCliente: string;3
  /**
   * Tiempo de encendido en segundos
   */
  tiempoEncendidoSonido: number;
  tiempoEncendidoBaliza: number;
  /**
   * Si tiene la luz encendida
   */
  luzEncendida: boolean;
  /**
   * Si está sonando
   */
  sonidoEncendido: boolean;

  // Virtuals
  cliente?: ICliente;
}
