import { ICoordenadas } from "../../auxiliares";
import { ICliente } from "../cliente";

export interface IGrupo {
  _id?: string;
  idCliente?: string;

  nombre?: string;

  // Solo para grupos geograficos
  coordenadas?: ICoordenadas[];
  geojson?: {
    type: "Polygon";
    coordinates: [number, number][][];
  };

  // Virtuals
  cliente?: ICliente;
}

type OmitirCreate = "_id" | "cliente" | "vecino";

export interface ICreateGrupo extends Omit<Partial<IGrupo>, OmitirCreate> {
  idsVecinos?: string[];
}

type OmitirUpdate = "_id" | "idCliente" | "idVecino" | "cliente" | "vecino";

export interface IUpdateGrupo extends Omit<Partial<IGrupo>, OmitirUpdate> {
  idsVecinos?: string[];
}
