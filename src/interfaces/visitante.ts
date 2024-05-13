import { IDatosPersonales } from "./config-vecino";

export interface IVisitante {
  _id?: string;
  idCliente?: string;
  fechaCreacion?: string;
  datosPersonales?: IDatosPersonales;
}

type OmitirCreate = "_id";
export interface ICreateVisitante
  extends Omit<Partial<IVisitante>, OmitirCreate> {}

type OmitirUpdate = "_id";
export interface IUpdateVisitante
  extends Omit<Partial<IVisitante>, OmitirUpdate> {}
