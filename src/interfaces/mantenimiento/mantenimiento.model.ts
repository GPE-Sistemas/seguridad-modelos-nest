import { ICliente } from '../cliente';
import { ISirena } from '../sirenas/sirena.model';
import { IUsuario } from '../usuario.model';

export interface IMantenimiento {
  _id: string;
  //
  fecha?: string;
  tags?: string[];
  descripcion?: string;
  urlFoto?: string;
  //
  idCliente?: string;
  idUsuario?: string;
  chipId?: string;
  // Populate
  cliente?: ICliente;
  usuario?: IUsuario;
  sirena?: ISirena;
}

export interface ICreateMantenimiento {
  //
  fecha?: string;
  tags?: string[];
  descripcion?: string;
  urlFoto?: string;
  //
  idCliente?: string;
  idUsuario?: string;
  chipId?: string;
}

export interface IUpdateMantenimiento {
  //
  fecha?: string;
  tags?: string[];
  descripcion?: string;
  urlFoto?: string;
  //
  idCliente?: string;
  idUsuario?: string;
  chipId?: string;
}
