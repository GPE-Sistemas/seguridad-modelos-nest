import { ICoordenadas } from "../auxiliares";
import { ICliente } from "./cliente";

export interface IConexionPortico {
  ip?: string;
  mask?: number;
  gateway?: string;
  dns?: string;
  macAddress?: string;
  static?: boolean;
}

export interface IConfigPortico {
  numeroCamara?: string;
  disSupP?: number;
  disIzqP?: number;
  tamP?: number;
  tamFondo?: number;
}

export interface IPortico {
  _id?: string;
  nombre?: string;
  ubicacionManual?: ICoordenadas;
  geojson?: {
    type: "Point";
    coordinates: [number, number];
  };
  idCliente?: string;
  macAddress?: string;
  marcaCamara?: string;
  modeloCamara?: string;
  fechaCreacion?: string;
  fechaColocacion?: string;
  online?: boolean;
  imgFondo?: string;
  configuraciones?: IConfigPortico[];
  cantCamaras?: number;
  conexion?: IConexionPortico;
  //Populate
  cliente?: ICliente;
}

export interface IResumenPorticosPorCliente {
  cliente: string;
  cantidad: number;
}

type OmitirCreate = "_id" | "cliente";
export interface ICreatePortico extends Omit<Partial<IPortico>, OmitirCreate> {}

type OmitirUpdate = "_id" | "cliente";
export interface IUpdatePortico extends Omit<Partial<IPortico>, OmitirUpdate> {}
