import { ICoordenadas } from "../../auxiliares";
import { ICliente } from "../cliente";
import { IConfigVecino } from "../config-vecino";
import { IZonaEstacionamiento } from "../zona-estacionamiento";

export interface IEstacionamiento {
  _id?: string;
  idConfigVecino?: string;
  idCliente?: string;
  idZonaEstacionamiento?: string;
  coordenadas?: ICoordenadas;
  geojson?: {
    type: "Point";
    coordinates: [number, number];
  };
  tipo?: "Abono" | "Temporal";
  fechaInicio?: string;
  fechaFinalizacionAutomatica?: string;
  dominio?: string;

  // Datos que se cargan al finalizar el estacionamiento
  monto?: number;
  fechaFin?: string;

  // Virtuals
  configVecino?: IConfigVecino;
  cliente?: ICliente;
  zonaEstacionamiento?: IZonaEstacionamiento;
}

type OmitirCreate = "_id" | "configVecino" | "cliente" | "zonaEstacionamiento";

export interface ICreateEstacionamiento
  extends Omit<Partial<IEstacionamiento>, OmitirCreate> {}

type OmitirUpdate = "_id" | "configVecino" | "cliente" | "zonaEstacionamiento";

export interface IUpdateEstacionamiento
  extends Omit<Partial<IEstacionamiento>, OmitirUpdate> {}
