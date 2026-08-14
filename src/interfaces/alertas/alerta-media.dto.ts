export interface ICrearAlertaMedia {
  idAlerta: string;
  idCliente?: string;
  tipo: string;
  mime: string;
  url: string;
  duracion?: number;
  seq?: number;
}

export interface INuevaAlertaMedia {
  idAlerta: string;
  tipo: string;
  mime: string;
}
