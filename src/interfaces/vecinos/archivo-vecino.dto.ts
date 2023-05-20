export interface IArchivoVecino {
  url?: string;
  nombre?: string;
  descripcion?: string;
  fechaCreacion?: string;
  idVecino?: string;
  idCliente?: string;
}

export interface ICreateArchivoVecino {
  url?: string;
  nombre?: string;
  descripcion?: string;
  idVecino?: string;
  idCliente?: string;
}

export interface IUpdateArchivoVecino {
  url?: string;
  nombre?: string;
  descripcion?: string;
}
