import { ICoordenadas } from "../../auxiliares";
import { ICliente } from "../cliente";
import { IZonaEstacionamiento } from "../zona-estacionamiento";

export interface IDominioExcento {
  _id?: string;
  dominio?: string;
  categoria?: "Global" | "Zona" | "Dirección";
  idCliente?: string;
  //Zona
  idZonaEstacionamiento?: IZonaEstacionamiento;
  // Dirección
  direccion?: string;
  coordeandas?: ICoordenadas;
  geojson?: {
    type: "Point";
    coordinates: [number, number];
  };

  // Virtuals
  cliente?: ICliente;
  zonaEstacionamiento?: IZonaEstacionamiento;
}

type OmitirCreate = "_id" | "zonaEstacionamiento" | "cliente";

export interface ICreateDominioExcento
  extends Omit<Partial<IDominioExcento>, OmitirCreate> {}

type OmitirUpdate = "_id" | "zonaEstacionamiento" | "cliente" | "idCliente";

export interface IUpdateDominioExcento
  extends Omit<Partial<IDominioExcento>, OmitirUpdate> {}
