import { ICliente } from "../cliente.model";

export interface IFirmwareCliente {
  _id: string;
  version: string;
  idCliente: string;
  fecha: string;

  //
  cliente?: ICliente;
}
