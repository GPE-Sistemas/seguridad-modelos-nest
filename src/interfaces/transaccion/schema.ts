import { ICliente } from '../cliente';
import { IConfigVecino } from '../config-vecino';

export interface ITransaccion {
  _id?: string;
  idConfigVecino?: string;
  idCliente?: string;
  idComprobante?: string; // Externo al sistema (Una factura o un comprobante de pago de pago fácil)

  fecha?: string;
  saldoActual?: number;
  saldoAnterior?: number;
  monto?: number;
  motivo?: string;

  // Virtuals
  cliente?: ICliente;
  configVecino?: IConfigVecino;
}

type OmitirCreate = '_id' | 'cliente' | 'configVecino';

export interface ICreateTransaccion
  extends Omit<Partial<ITransaccion>, OmitirCreate> {}

type OmitirUpdate =
  | '_id'
  | 'idCliente'
  | 'idConfigVecino'
  | 'cliente'
  | 'configVecino';

export interface IUpdateTransaccion
  extends Omit<Partial<ITransaccion>, OmitirUpdate> {}
