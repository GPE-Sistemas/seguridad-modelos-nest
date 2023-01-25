import { ICliente } from "./cliente.model";

export interface IMensaje {
  _id: string;
  idAlerta: string;
  idCliente: string;
  fecha: string;
  mensaje: string;
  texto: string;
  remitente: string;
  // Virtuals
  cliente?: ICliente;
}
