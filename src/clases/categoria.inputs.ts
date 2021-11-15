export class CrearCategoriaInput {
  nombre: string;
  prioridad: number;
  color?: string;
  idBtnPrincipal: string;
  idsBtnsSecundarios?: string[];
}

export class UpdateCategoriaInput {
  nombre?: string;
  prioridad?: number;
  color?: string;
  idBtnPrincipal?: string;
  idsBtnsSecundarios?: string[];
}
