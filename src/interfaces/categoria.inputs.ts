export interface ICrearCategoriaInput {
  nombre: string;
  prioridad: number;
  color?: string;
  idBtnPrincipal: string;
  idsBtnsSecundarios?: string[];
}

export interface IUpdateCategoriaInput {
  nombre?: string;
  prioridad?: number;
  color?: string;
  idBtnPrincipal?: string;
  idsBtnsSecundarios?: string[];
}
