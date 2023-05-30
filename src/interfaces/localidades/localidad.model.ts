import { IUbicacion } from "../auxiliares/ubicacion.model";

export interface ILocalidad {
  _id: string;
  nombre?: string;
  ubicacion?: IUbicacion;
  idCliente?: string;
}

export interface ICreateLocalidad {
  nombre?: string;
  ubicacion?: IUbicacion;
  idCliente?: string;
}

export interface IUpdateLocalidad {
  nombre?: string;
  ubicacion?: IUbicacion;
  idCliente?: string;
}
