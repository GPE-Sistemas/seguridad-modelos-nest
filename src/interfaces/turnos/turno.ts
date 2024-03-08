import { ICliente } from "../cliente";
import { IConfigVecino } from "../config-vecino";
import { IConfigTurno } from "./config-turno";

export interface ITurno {
  _id?: string;
  // Autogenerados
  fechaCreacion?: string;
  numero?: string; // Prefijo + Posición entre los turnos del rango
  // Inputs
  fecha?: string;
  fechaFin?: string;
  idConfigTurno?: string;
  // Tenancy
  idCliente?: string;
  idConfigVecino?: string;

  // Populates
  cliente?: ICliente;
  configVecino?: IConfigVecino;
  configTurno?: IConfigTurno;
}

type OmitirCreate =
  | "_id"
  | "fechaCreacion"
  | "cliente"
  | "configVecino"
  | "configTurno";

export interface ICreateTurno extends Omit<Partial<ITurno>, OmitirCreate> {}

type OmitirUpdate =
  | "_id"
  | "fechaCreacion"
  | "cliente"
  | "configVecino"
  | "configTurno";

export interface IUpdateTurno extends Omit<Partial<ITurno>, OmitirUpdate> {}
