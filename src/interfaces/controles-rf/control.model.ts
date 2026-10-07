import { ICliente, IConfigVecino, IVecino } from '../..';

export interface IControl {
  _id?: string;
  chipId?: string;
  etiqueta?: string;
  fechaCreacion?: string;
  idCliente?: string;
  /**
   * @deprecated se usa idConfigVecino
   */
  idVecino?: string;
  idConfigVecino?: string;
  baneado?: boolean;

  // Virtuals
  cliente?: ICliente;
  /**
   * @deprecated usar `configVecino.datosPersonales` (la colección vecinos está deprecada).
   * El virtual se mantiene solo por compatibilidad con los populate existentes.
   */
  vecino?: IVecino;
  configVecino?: IConfigVecino;
}
