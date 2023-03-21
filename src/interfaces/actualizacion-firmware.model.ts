import { ICliente } from "./cliente.model";
import { ISirena } from "./sirenas/sirena.model";

export interface IActualizacionFirmware {
  _id: string;
  fecha: string;
  chipIdSirena: string;
  firmwareActual: string;
  firmwareNuevo: string;
  idCliente: string;
  etapa: string;

  // Virtuals

  sirena?: ISirena;
  cliente?: ICliente;
}
