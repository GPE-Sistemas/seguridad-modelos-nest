import { ICliente } from "./cliente.model";

export interface IMensaje {
  _id: string;
  idCliente: string;
  texto: string;
  // Virtuals
  cliente?: ICliente;
}
