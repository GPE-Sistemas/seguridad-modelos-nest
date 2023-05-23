export interface ICrearAlertaMedia {
  idAlerta: string;
  idCliente?: string;
  tipo: string;
  mime: string;
  url: string;
}

export interface INuevaAlertaMedia {
  idAlerta: string;
  tipo: string;
  mime: string;
}
