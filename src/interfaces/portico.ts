import { ICliente } from "./cliente";


export interface IPortico {
  _id?: string;
  nombre?: string;
  geojson?: {
    type: "Point";
    coordinates: [number, number];
  };
  idCliente?: string;
  macAddress?: string;
  marcaCamara?: string;
  modeloCamara?: string;
  //Populate
  cliente?: ICliente;
}

type OmitirCreate = "_id" | "cliente";
export interface ICreatePortico extends Omit<Partial<IPortico>, OmitirCreate> {}

type OmitirUpdate = "_id" | "cliente";
export interface IUpdatePortico extends Omit<Partial<IPortico>, OmitirUpdate> {}





