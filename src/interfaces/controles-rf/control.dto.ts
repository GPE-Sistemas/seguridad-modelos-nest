export interface ICrearControl {
  idControl: string;
  fechaCreacion?: string;
  idCliente?: string;
  idVecino?: string;
}

export interface IUpdateControl {
  idControl?: string;
  idCliente?: string;
  idVecino?: string;
}

export interface IResumenControlesPorCliente {
  cliente: string;
  cantidad: number;
}
