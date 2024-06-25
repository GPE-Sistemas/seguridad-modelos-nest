import { ICliente } from "./cliente";
import { IPortico } from "./portico";


export interface ILecturaPortico {
  _id?: string;
  patente?: string;
  velocidad?: number;
  fechaCreacion?: string;
  fechaLectura?: string;
  idPortico?: string;
  idCliente?: string;
  //Populate
  portico?: IPortico;
  cliente?: ICliente;
}

type OmitirCreate = "_id" | "portico" | "cliente";
export interface ICreateLecturaPortico extends Omit<Partial<ILecturaPortico>, OmitirCreate> {}

type OmitirUpdate = "_id" | "portico" | "cliente";
export interface IUpdateLecturaPortico extends Omit<Partial<ILecturaPortico>, OmitirUpdate> {}