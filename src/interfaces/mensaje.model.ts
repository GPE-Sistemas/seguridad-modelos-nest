import { ICliente } from "./cliente";

export interface IMensaje {
  _id: string;
  idCliente: string;
  texto: string;
  // Virtuals
  cliente?: ICliente;
}
