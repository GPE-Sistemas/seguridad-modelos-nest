import { IConfigVecino } from "./config-vecino";
import { IVisitante } from "./visitante";

export interface IVehiculo {
  _id?: string;
  idCliente?: string;
  dominio?: string;
  dnis?: string[];
  marca?: string;
  modelo?: string;
  color?: string;

  // Virtuals
  vecinos?: IConfigVecino[];
  visitantes?: IVisitante[];
}

type OmitirCreate = "_id" | "vecinos" | "visitantes";
export interface ICreateVehiculo
  extends Omit<Partial<IVehiculo>, OmitirCreate> {}

type OmitirUpdate = "_id" | "vecinos" | "visitantes";
export interface IUpdateVehiculo
  extends Omit<Partial<IVehiculo>, OmitirUpdate> {}
