import { ICoordenadas } from '../generales/coordenadas';

export interface ICrearEvento {
  idCliente?: string;
  fecha: string;
  emisor?: string;
  categoria: string;
  tags: string[];
  direccion?: string;
  coordenadas?: ICoordenadas;
  idVecino?: string;
  idAlerta?: string;
}

export interface IUpdateEvento {
  fecha?: string;
  emisor?: string;
  categoria?: string;
  tags?: string[];
  direccion?: string;
  coordenadas?: ICoordenadas;
  idVecino?: string;
  idAlerta?: string;
}
