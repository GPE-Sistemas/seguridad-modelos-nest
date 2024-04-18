export interface IArchivoVecino {
  url?: string;
  nombre?: string;
  descripcion?: string;
  fechaCreacion?: string;
  /**
   * @deprecated se usa idConfigVecino
   */
  idVecino?: string;
  idConfigVecino?: string;
  idCliente?: string;
}

export interface ICreateArchivoVecino {
  url?: string;
  nombre?: string;
  descripcion?: string;
  /**
   * @deprecated se usa idConfigVecino
   */
  idVecino?: string;
  idConfigVecino?: string;
  idCliente?: string;
}

export interface IUpdateArchivoVecino {
  url?: string;
  nombre?: string;
  descripcion?: string;
}
