export interface ICrearCategoriaInput {
  nombre: string;
  prioridad: number;
  color?: string;
  idBtnPrincipal: string;
  idsBtnsSecundarios?: string[];
  editable?: boolean;
}

export interface IUpdateCategoriaInput {
  nombre?: string;
  prioridad?: number;
  color?: string;
  idBtnPrincipal?: string;
  idsBtnsSecundarios?: string[];
}
