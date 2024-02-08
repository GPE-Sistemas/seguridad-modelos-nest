import { ICoordenadasInput } from "../../auxiliares/coordenadas";
import { GeoJSONType } from "../vecinos/vecino.model";
import { TiposCentroMonitoreo } from "./schema";

export interface ICrearCentroMonitoreoInput {
  nombre: string;
  ubicacion: ICoordenadasInput;
  tipo?: TiposCentroMonitoreo;
  geojson?: {
    type: "Point";
    coordinates: [number, number];
  };
  idCliente: string;
}

export interface IUpdateCentroMonitoreoInput {
  nombre?: string;
  ubicacion?: ICoordenadasInput;
  tipo?: TiposCentroMonitoreo;
  geojson?: {
    type: "Point";
    coordinates: [number, number];
  };
}

export interface INuevoCentroMonitoreoInput {
  nombre: string;
  ubicacion: ICoordenadasInput;
  tipo?: TiposCentroMonitoreo;
  geojson?: {
    type: "Point";
    coordinates: [number, number];
  };
}
