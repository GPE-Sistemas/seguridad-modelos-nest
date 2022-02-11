export interface ICrearControl {
  chipId: string;
  fechaCreacion?: string;
  idCliente?: string;
  idVecino?: string;
}

export interface IUpdateControl {
  chipId?: string;
  idCliente?: string;
  idVecino?: string;
}

export interface IResumenControlesPorCliente {
  cliente: string;
  cantidad: number;
}
