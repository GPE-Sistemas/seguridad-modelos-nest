import { ICoordenadas } from "../auxiliares";
import { ICliente } from "./cliente";

export interface IConfigPortico {
  type?: string;
  imgFondo?: string;
  disSupP?: number;
  disIzqP?: number;
  tamP?: number;
  disSupL?: number;
  disIzqL?: number;
  tamL?: number;
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
  configuracion?: IConfigPortico;
  //Populate
  cliente?: ICliente;
}

type OmitirCreate = "_id" | "cliente";
export interface ICreatePortico extends Omit<Partial<IPortico>, OmitirCreate> {}

type OmitirUpdate = "_id" | "cliente";
export interface IUpdatePortico extends Omit<Partial<IPortico>, OmitirUpdate> {}
