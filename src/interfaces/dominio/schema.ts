import { ICliente } from '../cliente';
import { IConfigVecino } from '../config-vecino';

export interface IDominio {
  _id?: string;
  idConfigVecino?: string;

  dominio?: string;

  // Virtuals
  configVecino?: IConfigVecino;
}

type OmitirCreate = '_id' | 'configVecino';

export interface ICreateDominio extends Omit<Partial<IDominio>, OmitirCreate> {}

type OmitirUpdate = '_id' | 'configVecino';

export interface IUpdateDominio extends Omit<Partial<IDominio>, OmitirUpdate> {}
