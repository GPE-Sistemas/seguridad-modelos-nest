export interface ICrearCategoriaInput {
  nombre: string;
  prioridad: number;
  color?: string;
  idBtnPrincipal: string;
  idsBtnsSecundarios?: string[];
  idsOtrosBotones?: string[];
  editable?: boolean;
  twitter: boolean;
}

export interface IUpdateCategoriaInput {
  nombre?: string;
  prioridad?: number;
  color?: string;
  idBtnPrincipal?: string;
  idsBtnsSecundarios?: string[];
  idsOtrosBotones?: string[];
  twitter?: boolean;
}
