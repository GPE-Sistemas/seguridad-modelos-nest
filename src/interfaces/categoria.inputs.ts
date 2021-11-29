export interface ICrearCategoriaInput {
  nombre: string;
  prioridad: number;
  color?: string;
  idBtnPrincipal: string;
  idsBtnsSecundarios?: string[];
  editable?: boolean;
  twitter: boolean;
  imagenArriba?: string;
  imagenAbajo?: string;
}

export interface IUpdateCategoriaInput {
  nombre?: string;
  prioridad?: number;
  color?: string;
  idBtnPrincipal?: string;
  idsBtnsSecundarios?: string[];
  twitter?: boolean;
  imagenArriba?: string;
  imagenAbajo?: string;
}
