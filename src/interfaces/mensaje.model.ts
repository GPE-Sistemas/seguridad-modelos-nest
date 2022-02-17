import { ICliente } from "./cliente.model";

export interface IMensaje {
  _id: string;
  texto: string;
  idCliente: string;
  // Virtuals
  cliente?: ICliente;
}
