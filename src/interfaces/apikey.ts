import { Rol } from "../auxiliares";

export interface IApiKey {
  _id?: string;
  apiName?: string;
  fechaCreacion?: string;
  fechaExpiracion?: string;
  key?: string;
  idCliente?: string;
  roles?: Rol[];
}

type OmitirCreate = "_id";
export interface ICreateApiKey extends Omit<Partial<IApiKey>, OmitirCreate> {}

type OmitirUpdate = "_id";
export interface IUpdateApiKey extends Omit<Partial<IApiKey>, OmitirUpdate> {}
