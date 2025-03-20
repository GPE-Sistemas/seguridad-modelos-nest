import { ICliente } from "./cliente";
import { IConfigVecino } from "./config-vecino";

export interface IBeacon {
  _id?: string;
  mac?: string;
  fechaCreacion?: string;
  idConfigVecino?: string;
  baneado?: boolean;
  etiqueta?: string;
  idCliente?: string;
  // Populate
  configVecino?: IConfigVecino;
  cliente?: ICliente;
}

type OmitirCreate = "_id" | "configVecino" | "cliente";
export interface ICreateBeacon extends Omit<Partial<IBeacon>, OmitirCreate> {}

type OmitirUpdate = "_id" | "configVecino" | "cliente";
export interface IUpdateBeacon extends Omit<Partial<IBeacon>, OmitirUpdate> {}
