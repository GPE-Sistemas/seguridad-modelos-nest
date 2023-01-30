import { ICoordenadas } from "../generales/coordenadas";

export interface ICrearEvento {
  idCliente?: string;
  observaciones?: string;
  fecha: string;
  emisor?: string;
  categoria: string;
  tags: string[];
  direccion?: string;
  coordenadas?: ICoordenadas;
  victima?: string;
  causante?: string;
  idVecino?: string;
  idAlerta?: string;
}

export interface IUpdateEvento {
  observaciones?: string;
  fecha?: string;
  emisor?: string;
  categoria?: string;
  tags?: string[];
  direccion?: string;
  coordenadas?: ICoordenadas;
  idVecino?: string;
  idAlerta?: string;
}
