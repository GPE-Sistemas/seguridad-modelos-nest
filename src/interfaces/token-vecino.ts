import { ICliente } from "./cliente";
import { IConfigVecino } from "./config-vecino";

export interface ITokenVecino {
  _id?: string;
  token?: string;
  idConfigVecino?: string;
  idCliente?: string;
  fechaCreacion?: string;
  fechaVencimiento?: string;
  fechaUso?: string;

  // Virtuals
  configVecino?: IConfigVecino;
  cliente?: ICliente;
}

type OmitirCreate = "_id" | "configVecino" | "cliente";

export interface IResumenTokensPorFecha {
  fecha: string;
  cantidad: number;
}

export interface ICreateTokenVecino
  extends Omit<Partial<ITokenVecino>, OmitirCreate> {}

type OmitirUpdate = "_id" | "configVecino" | "cliente";

export interface IUpdateTokenVecino
  extends Omit<Partial<ITokenVecino>, OmitirUpdate> {}
