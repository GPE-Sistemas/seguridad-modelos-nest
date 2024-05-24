import { IConfigVecino } from "./config-vecino";

export interface ITokenVecino {
  _id?: string;
  token?: string;
  idConfigVecino?: string;
  fechaCreacion?: string;
  fechaVencimiento?: string;
  fechaUso?: string;

  // Virtuals
  configVecino?: IConfigVecino;
}

type OmitirCreate = "_id" | "configVecino";

export interface ICreateTokenVecino
  extends Omit<Partial<ITokenVecino>, OmitirCreate> {}

type OmitirUpdate = "_id" | "configVecino";

export interface IUpdateTokenVecino
  extends Omit<Partial<ITokenVecino>, OmitirUpdate> {}
