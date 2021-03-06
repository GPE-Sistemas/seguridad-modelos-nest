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
  // Virtuals
  btnsPrincipales?: IBoton[];
  btnsSecundarios?: IBoton[];
  otrosBotones?: IBoton[];
}
