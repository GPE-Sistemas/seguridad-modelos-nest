import { ICliente } from "../cliente";
import { ICoordenadas } from "../generales/coordenadas";
import { ICategoriaVecino } from "../vecinos/categoria-vecino.model";
import { IVecino } from "../vecinos/vecino.model";

export interface IDireccionVecino {
  direccion?: string;
  complementoDireccion?: string;
  idLocalidad?: string;
  idBarrio?: string;
  ubicacionDireccion?: ICoordenadas;
  geojson?: {
    type: "Point";
    coordinates: [number, number];
  };
}

export interface IConfigVecino {
  _id?: string;
  idCliente?: string;
  idVecino?: string;

  ultimoAcceso?: string;
  tokenPush?: string;
  idSmartCity?: string;
  appVersion?: string;
  app?: string;
  appType?: string;

  categoria?: ICategoriaVecino;
  direccion?: IDireccionVecino;

  // Virtuals
  cliente?: ICliente;
  vecino?: IVecino;
}

type OmitirCreate = "_id" | "cliente" | "vecino";

export interface ICreateConfigVecino
  extends Omit<Partial<IConfigVecino>, OmitirCreate> {}

type OmitirUpdate = "_id" | "idCliente" | "idVecino" | "cliente" | "vecino";

export interface IUpdateConfigVecino
  extends Omit<Partial<IConfigVecino>, OmitirUpdate> {}
