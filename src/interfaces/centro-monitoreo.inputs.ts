import { ICoordenadasInput } from './coordenadas';

export interface ICrearCentroMonitoreoInput {
  nombre: string;
  ubicacion: ICoordenadasInput;
  idCliente: string;
}

export interface IUpdateCentroMonitoreoInput {
  nombre?: string;
  ubicacion?: ICoordenadasInput;
}

export interface INuevoCentroMonitoreoInput {
  nombre: string;
  ubicacion: ICoordenadasInput;
}
