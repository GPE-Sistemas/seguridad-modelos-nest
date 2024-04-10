import { IBoton } from "../boton/schema";

export interface ICategoria {
  _id?: string;
  nombre?: string;
  variante?: string;
  prioridad?: number;
  color?: string;
  editable?: boolean;
  idsBtnsPrincipales?: string[];
  idsBtnsSecundarios?: string[];
  idsOtrosBotones?: string[];
  twitter?: boolean;
  tercerBoton?: boolean;
  nombreTemplate?: string;
  idBotonAlertaControl?: string;
  // Virtuals
  btnsPrincipales?: IBoton[];
  btnsSecundarios?: IBoton[];
  otrosBotones?: IBoton[];
  botonAlertaControl?: IBoton;
}

type OmitirCreate =
  | "_id"
  | "btnsPrincipales"
  | "btnsSecundarios"
  | "otrosBotones"
  | "botonAlertaControl";
export interface ICreateCategoria
  extends Omit<Partial<ICategoria>, OmitirCreate> {}

type OmitirUpdate =
  | "_id"
  | "btnsPrincipales"
  | "btnsSecundarios"
  | "otrosBotones"
  | "botonAlertaControl";

export interface IUpdateCategoria
  extends Omit<Partial<ICategoria>, OmitirUpdate> {}
