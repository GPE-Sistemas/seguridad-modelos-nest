export enum estados {
  "Nueva" = "Nueva",
  "Vista" = "Vista",
  "En Atención" = "En Atención",
  "En Espera" = "En Espera",
  "Liberada" = "Liberada",
  "Finalizada" = "Finalizada",
}

export interface ICrearAlertaEstadoInput {
  idAlerta: string;
  idCliente?: string;
  estado: estados;
  notaPredefinida?: string;
  nota?: string;
  notaInterna?: string;
  causante?: string;
}
