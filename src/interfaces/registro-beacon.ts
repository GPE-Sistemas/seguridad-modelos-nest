import { IConfigVecino } from "./config-vecino";

export interface IBeacon {
  _id?: string;
  mac?: string;
  fechaCreacion?: string;
  idConfigVecino?: string;
  geojson?: {
    type: "Polygon";
    coordinates: [number, number][][];
  };
  imei?: string;
  // Populate
  configVecino?: IConfigVecino;
}

type OmitirCreate = "_id" | "configVecino";
export interface ICreateBeacon extends Omit<Partial<IBeacon>, OmitirCreate> {}

type OmitirUpdate = "_id" | "configVecino";
export interface IUpdateBeacon extends Omit<Partial<IBeacon>, OmitirUpdate> {}
