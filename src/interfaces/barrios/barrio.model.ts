import { IUbicacion } from "../auxiliares/ubicacion.model";
import { ILocalidad } from "../localidades/localidad.model";

export interface IBarrio {
  _id: string;
  nombre?: string;
  ubicacion?: IUbicacion;
  idCliente?: string;
  idLocalidad?: string;
  // Populate
  localidad?: ILocalidad;
}

export interface ICreateBarrio {
  nombre?: string;
  ubicacion?: IUbicacion;
  idCliente?: string;
  idLocalidad?: string;
}

export interface IUpdateBarrio {
  nombre?: string;
  ubicacion?: IUbicacion;
  idCliente?: string;
  idLocalidad?: string;
}
