import { ICategoriaVecino } from './categoria-vecino.model';
import { ICoordenadasInput } from './coordenadas';

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
  codigoValidacionSMS: string;
  idCategoriaDefault: string;
}

export interface IUpdateVecinoInput {
  activo?: boolean;
  categoria?: ICategoriaVecino;
  codigoValidacionSMS?: string;
}

export interface INuevoVecinoInput {
  nombre: string;
  dni: string;
  sexo: boolean;
  fechaNacimiento: string;
  pais: string;
  telefono: string;
  email: string;
  direccion: string;
  /**
   * La ubicacion solo es necesaria cuando el vecino se crea desde la app de boton por la propia persona
   */
  ubicacion?: ICoordenadasInput;
}
