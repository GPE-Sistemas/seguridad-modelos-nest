import { ICliente, IConfigVecino, IVecino } from '../..';

export interface IControl {
  _id?: string;
  chipId?: string;
  etiqueta?: string;
  fechaCreacion?: string;
  idCliente?: string;
  idVecino?: string;
  idConfigVecino?: string;
  baneado?: boolean;

  // Virtuals
  cliente?: ICliente;
  vecino?: IVecino;
  configVecino?: IConfigVecino;
}
