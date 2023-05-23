import { ICoordenadasInput } from "../..";

export interface ICrearAlertaUbicacionInput {
  idAlerta: string;
  idCliente?: string;
  ubicacion: ICoordenadasInput;
  direccion?: string;
}
