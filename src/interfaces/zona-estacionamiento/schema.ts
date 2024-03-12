import { ICoordenadas } from "../../auxiliares";
import { ICliente } from "../cliente";

export interface RangoEstacionamiento {
  dia?: number; // 0 - 6 (Domingo - Sabado) Como en el Date.getDay()
  desde?: string;
  hasta?: string;
  costoFraccion?: number; // Cantidades de unidad fija
  fraccion?: number; // Tiempo en minutos
  tiempoDeGracia?: number; // MINUTOS
  costoInfraccion?: number; // Cantidades de unidad fija
}

export interface IAbono {
  cantidadDias?: number;
  costo?: number; // Cantidades de unidad fija
}

export interface IZonaEstacionamiento {
  _id?: string;
  idCliente?: string;
  nombre?: string;
  rangos?: RangoEstacionamiento[];
  abonos?: IAbono[];
  coordenadas?: ICoordenadas[];
  geojson?: {
    type: "Polygon";
    coordinates: [number, number][][];
  };

  // Virtuals
  cliente?: ICliente;
}

type OmitirCreate = "_id" | "cliente";

export interface ICreateZonaEstacionamiento
  extends Omit<Partial<IZonaEstacionamiento>, OmitirCreate> {}

type OmitirUpdate = "_id" | "cliente";

export interface IUpdateZonaEstacionamiento
  extends Omit<Partial<IZonaEstacionamiento>, OmitirUpdate> {}
