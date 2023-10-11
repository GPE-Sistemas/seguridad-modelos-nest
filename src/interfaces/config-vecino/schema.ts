import { ICoordenadas } from "../generales/coordenadas";
import { ICategoriaVecino } from "../vecinos/categoria-vecino.model";

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
}

type Omitir = "_id";

export interface ICreateConfigVecino
  extends Omit<Partial<IConfigVecino>, Omitir> {}

export interface IUpdateConfigVecino
  extends Omit<Partial<IConfigVecino>, Omitir> {}
