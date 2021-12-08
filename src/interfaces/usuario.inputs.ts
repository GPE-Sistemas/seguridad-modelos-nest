import { IOperadorInput } from './operador.inputs';

export enum roles {
  admin = 'admin',
  operador = 'operador',
}

export interface ICrearUsuarioInput {
  nombre: string;
  dni?: string;
  sexo?: boolean;
  telefono?: string;
  roles: string[];
  idCliente: string;
  activo?: boolean;
  email?: string;
  direccion?: string;
  pais?: string;
  fechaNacimiento?: string;
  usuario: string;
  clave: string;
  operador?: IOperadorInput;
}

export interface IUpdateUsuarioInput {
  nombre?: string;
  dni?: string;
  sexo?: boolean;
  telefono?: string;
  roles?: string[];
  activo?: boolean;
  email?: string;
  direccion?: string;
  pais?: string;
  fechaNacimiento?: string;
  usuario?: string;
  clave?: string;
  operador?: IOperadorInput;
}

export interface INuevoUsuarioInput {
  nombre: string;
  dni?: string;
  sexo?: boolean;
  telefono?: string;
  roles: string[];
  idCliente?: string;
  activo?: boolean;
  email?: string;
  direccion?: string;
  pais?: string;
  fechaNacimiento?: string;
  usuario: string;
  clave: string;
  operador?: IOperadorInput;
}

export interface IResumenUsuariosPorCliente {
  cliente: string;
  cantidad: number;
}
