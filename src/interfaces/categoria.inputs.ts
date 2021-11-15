export interface ICrearinterfaceInput {
  nombre: string;
  prioridad: number;
  color?: string;
  idBtnPrincipal: string;
  idsBtnsSecundarios?: string[];
}

export interface IUpdateinterfaceInput {
  nombre?: string;
  prioridad?: number;
  color?: string;
  idBtnPrincipal?: string;
  idsBtnsSecundarios?: string[];
}
