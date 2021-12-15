import { ICoordenadasInput } from '../..';

export interface ICrearAlertaUbicacionInput {
  idAlerta: string;
  ubicacion: ICoordenadasInput;
  direccion?: string;
}
