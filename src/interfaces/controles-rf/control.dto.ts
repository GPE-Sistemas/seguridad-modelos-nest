export interface ICrearControl {
  chipId: string;
  etiqueta?: string;
  fechaCreacion?: string;
  idCliente?: string;
  /**
   * @deprecated se usa idConfigVecino
   */
  idVecino?: string;
  idConfigVecino?: string;
  baneado?: boolean;
}

export interface IUpdateControl {
  chipId?: string;
  etiqueta?: string;
  idCliente?: string;
  /**
   * @deprecated se usa idConfigVecino
   */
  idVecino?: string;
  idConfigVecino?: string;
  baneado?: boolean;
}

export interface IResumenControlesPorCliente {
  cliente: string;
  cantidad: number;
}
