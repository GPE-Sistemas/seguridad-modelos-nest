export interface ICrearCategoriaInput {
  nombre: string;
  variante?: string;
  prioridad: number;
  color?: string;
  idsBtnPrincipales?: string[];
  idsBtnsSecundarios?: string[];
  idsOtrosBotones?: string[];
  editable?: boolean;
  twitter: boolean;
}

export interface IUpdateCategoriaInput {
  nombre?: string;
  variante?: string;
  prioridad?: number;
  color?: string;
  idsBtnPrincipales?: string[];
  idsBtnsSecundarios?: string[];
  idsOtrosBotones?: string[];
  twitter?: boolean;
}
