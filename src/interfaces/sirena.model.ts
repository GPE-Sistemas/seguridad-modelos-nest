import { ICliente } from './cliente.model';
import { ICoordenadas } from './coordenadas';

export interface ISirena {
  _id: string;
  /**
   * Si la sirena se puede usar
   */
  fechaCreacion: string;
  activa: boolean;
  chipId: string;
  ubicacionGps: ICoordenadas;
  direccionGps: string;
  ubicacionManual: ICoordenadas;
  direccionManual: string;
  /**
   * Cliente determinado por la ubicacion
   */
  idCliente: string;
  tiempoEncendidoLuzMs: number;
  tiempoEncendidoSonidoMs: number;
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
