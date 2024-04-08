import { ICentroMonitoreo } from "../centro-monitoreo";
import { ICliente } from "../cliente";
import { IConfigVecino } from "../config-vecino";
import { IUsuario } from "../usuario";

export interface IDerivacion {
  _id?: string;
  idCliente?: string;
  idBoton?: string;
  idCentroMonitoreo?: string;
  desde?: string;
  hasta?: string;

  // Virtuals
  cliente?: ICliente;
  boton?: IConfigVecino;
  centroMonitoreo?: ICentroMonitoreo;
}

type OmitirCreate = "_id" | "cliente" | "boton" | "centroMonitoreo";

export interface ICreateDerivacion
  extends Omit<Partial<IDerivacion>, OmitirCreate> {}

type OmitirUpdate = "_id" | "cliente" | "boton" | "centroMonitoreo";

export interface IUpdateDerivacion
  extends Omit<Partial<IDerivacion>, OmitirUpdate> {}
