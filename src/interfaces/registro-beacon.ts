import { IConfigVecino } from "./config-vecino";

export interface IRegistroBeacon {
  _id?: string;
  mac?: string;
  fechaCreacion?: string;
  idConfigVecino?: string;
  geojson?: {
    type: "Point";
    coordinates: [number, number];
  };
  imei?: string;
  // Populate
  configVecino?: IConfigVecino;
}

type OmitirCreate = "_id" | "configVecino";
export interface ICreateRegistroBeacon
  extends Omit<Partial<IRegistroBeacon>, OmitirCreate> {}

type OmitirUpdate = "_id" | "configVecino";
export interface IUpdateRegistroBeacon
  extends Omit<Partial<IRegistroBeacon>, OmitirUpdate> {}
