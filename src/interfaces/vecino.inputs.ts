import { ICategoriaVecino } from './categoria-vecino.model';

export interface ICrearVecinoInput {
  nombre: string;
  dni: string;
  sexo: boolean;
  telefono: string;
  idCliente: string;
  activo?: boolean;
  email?: string;
  direccion: string;
  pais?: string;
  fechaNacimiento?: string;
  categoria?: ICategoriaVecino;
}

export interface IUpdateVecinoInput {
  activo?: boolean;
  categoria?: ICategoriaVecino;
}
