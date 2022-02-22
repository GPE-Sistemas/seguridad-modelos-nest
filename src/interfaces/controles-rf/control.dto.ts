export interface ICrearControl {
  chipId: string;
  fechaCreacion?: string;
  idCliente?: string;
  idVecino?: string;
  baneado?: boolean;
}

export interface IUpdateControl {
  chipId?: string;
  idCliente?: string;
  idVecino?: string;
  baneado?: boolean;
}

export interface IResumenControlesPorCliente {
  cliente: string;
  cantidad: number;
}
