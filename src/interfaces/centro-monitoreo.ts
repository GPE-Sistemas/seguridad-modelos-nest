import { ICoordenadas } from "../auxiliares";
import { ICliente } from "./cliente";

export type TiposCentroMonitoreo = "Normal" | "Derivado";

export interface ICentroMonitoreo {
  _id?: string;
  nombre?: string;
  tipo?: TiposCentroMonitoreo;
  ubicacion?: ICoordenadas;
  geojson?: {
    type: "Point";
    coordinates: [number, number];
  };
  idCliente?: string;
  // Virtuals
  cliente?: ICliente;
}

type OmitirCreate = "_id";
export interface ICreateCentroMonitoreo
  extends Omit<Partial<ICentroMonitoreo>, OmitirCreate> {}

type OmitirUpdate = "_id";
export interface IUpdateCentroMonitoreo
  extends Omit<Partial<ICentroMonitoreo>, OmitirUpdate> {}
