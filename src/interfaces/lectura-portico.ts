import { IPortico } from "./portico";


export interface ILecturaPortico {
  _id?: string;
  patente?: string;
  velocidad?: number;
  fechaCreacion?: string;
  fechaLectura?: string;
  idPortico?: string;
  //Populate
  portico?: IPortico;
}

type OmitirCreate = "_id" | "portico";
export interface ICreateLecturaPortico extends Omit<Partial<ILecturaPortico>, OmitirCreate> {}

type OmitirUpdate = "_id" | "portico";
export interface IUpdateLecturaPortico extends Omit<Partial<ILecturaPortico>, OmitirUpdate> {}