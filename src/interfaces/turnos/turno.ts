import { ICliente } from '../cliente';
import { IVecino } from '../vecinos';
import { IConfigTurno } from './config-turno';

export interface ITurno {
  _id?: string;
  // Autogenerados
  fechaCreacion?: string;
  numero?: string; // Prefijo + Posición entre los turnos del rango
  // Inputs
  fecha?: string;
  idConfigTurno?: string;
  // Tenancy
  idCliente?: string;
  idVecino?: string;

  // Populates
  cliente?: ICliente;
  vecino?: IVecino;
  configTurno?: IConfigTurno;
}

type OmitirCreate =
  | '_id'
  | 'fechaCreacion'
  | 'cliente'
  | 'vecino'
  | 'configTurno';

export interface ICreateTurno extends Omit<Partial<ITurno>, OmitirCreate> {}

type OmitirUpdate =
  | '_id'
  | 'fechaCreacion'
  | 'cliente'
  | 'vecino'
  | 'configTurno';

export interface IUpdateTurno extends Omit<Partial<ITurno>, OmitirUpdate> {}
