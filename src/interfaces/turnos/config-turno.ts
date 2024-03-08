import { ICliente } from '../cliente';
import { IUsuario } from '../usuario';

export type TipoTurno = 'Hospital' | 'Municipal' | 'Automotor';

export interface RangoTurno {
  dia?: number; // 0 - 6 (Domingo - Sabado) Como en el Date.getDay()
  desde?: string;
  hasta?: string;
  duracion?: number; // Minutos
  cantidad?: number; // Cantidad total de turnos en el rango
}

export interface IConfigTurno {
  _id?: string;
  // Inputs
  tipoTurno?: TipoTurno;
  rangos?: RangoTurno[];
  prefijo?: string; // Para poner el número del turno
  direccion?: string;
  detalles?: string;
  // Tenancy
  idCliente?: string;
  idUsuario?: string;
  // Populates
  cliente?: ICliente;
  usuario?: IUsuario;
}

type OmitirCreate = '_id' | 'cliente' | 'usuario';

export interface ICreateConfigTurno
  extends Omit<Partial<IConfigTurno>, OmitirCreate> {}

type OmitirUpdate = '_id' | 'cliente' | 'usuario';

export interface IUpdateConfigTurno
  extends Omit<Partial<IConfigTurno>, OmitirUpdate> {}
