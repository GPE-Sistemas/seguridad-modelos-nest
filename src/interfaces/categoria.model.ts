import { IBoton } from "./boton.model";

export interface ICategoria {
  _id: string;
  nombre: string;
  variante: string;
  prioridad: number;
  color: string;
  editable: boolean;
  idsBtnsPrincipales: string[];
  idsBtnsSecundarios: string[];
  idsOtrosBotones: string[];
  twitter: boolean;
  tercerBoton: boolean;
  nombreTemplate: string;
  idBotonAlertaControl: string;
  // Virtuals
  btnsPrincipales?: IBoton[];
  btnsSecundarios?: IBoton[];
  otrosBotones?: IBoton[];
  BotonAlertaControl?: IBoton;
}
