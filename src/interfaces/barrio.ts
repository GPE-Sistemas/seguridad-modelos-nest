import { IUbicacion } from "../auxiliares/ubicacion";
import { ILocalidad } from "./localidades/schema";

export interface IBarrio {
  _id?: string;
  nombre?: string;
  ubicacion?: IUbicacion;
  geojson?: {
    type: "Polygon";
    coordinates: [number, number][][];
  };
  idCliente?: string;
  idLocalidad?: string;
  // Populate
  localidad?: ILocalidad;
}

type OmitirCreate = "_id" | "localidad";
export interface ICreateBarrio extends Omit<Partial<IBarrio>, OmitirCreate> {}

type OmitirUpdate = "_id" | "localidad";
export interface IUpdateBarrio extends Omit<Partial<IBarrio>, OmitirUpdate> {}
