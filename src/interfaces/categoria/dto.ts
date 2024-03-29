export interface ICrearCategoriaInput {
  nombre: string;
  variante?: string;
  prioridad: number;
  color?: string;
  idsBtnsPrincipales?: string[];
  idsBtnsSecundarios?: string[];
  idsOtrosBotones?: string[];
  editable?: boolean;
  tercerBoton?: boolean;
  twitter: boolean;
  nombreTemplate: string;
  idBotonAlertaControl?: string;
}

export interface IUpdateCategoriaInput {
  nombre?: string;
  variante?: string;
  prioridad?: number;
  color?: string;
  idsBtnsPrincipales?: string[];
  idsBtnsSecundarios?: string[];
  idsOtrosBotones?: string[];
  twitter?: boolean;
  tercerBoton?: boolean;
  nombreTemplate: string;
  idBotonAlertaControl?: string;
}
