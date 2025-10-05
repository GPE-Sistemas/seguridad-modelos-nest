import { ICliente } from '../cliente';
import { ICentroMonitoreo } from '../centro-monitoreo';

export interface IEntidadExternaHistorico {
  _id?: string;
  nombre: string; // Normalizado (lowercase, trimmed)
  idCliente: string;
  idCentroMonitoreo?: string; // Opcional para scope futuro
  frecuenciaUso: number;
  fechaUltimoUso: string;
  fechaCreacion: string;
  activo: boolean;

  // Virtuals
  cliente?: ICliente;
  centroMonitoreo?: ICentroMonitoreo;
}

type OmitirCreate = "_id" | "cliente" | "centroMonitoreo";

export interface ICreateEntidadExternaHistorico
  extends Omit<Partial<IEntidadExternaHistorico>, OmitirCreate> {
  nombre: string; // Requerido
  idCliente: string; // Requerido
}

type OmitirUpdate = "_id" | "cliente" | "centroMonitoreo";

export interface IUpdateEntidadExternaHistorico
  extends Omit<Partial<IEntidadExternaHistorico>, OmitirUpdate> {}
