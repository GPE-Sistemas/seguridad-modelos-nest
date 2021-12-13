import { ICoordenadasInput } from './coordenadas';

export interface ICrearAlertaUbicacionInput {
  idAlerta: string;
  ubicacion: ICoordenadasInput;
  direccion?: string;
}
