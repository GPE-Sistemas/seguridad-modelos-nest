import { ICoordenadasInput } from './coordenadas';

export interface ICrearZonaInput {
  nombre: string;
  coordenadas: ICoordenadasInput[];
  idCliente: string;
  idsPrioridad: string[];
}

export interface IUpdateZonaInput {
  nombre?: string;
  coordenadas?: ICoordenadasInput[];
  idsPrioridad?: string[];
}
