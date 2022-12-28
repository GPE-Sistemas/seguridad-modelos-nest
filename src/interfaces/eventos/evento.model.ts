import { IAlerta } from "../alertas/alerta.model";
import { ICoordenadas } from "../generales/coordenadas";
import { IVecino } from "../vecinos/vecino.model";

export interface IEvento {
  _id: string;
  idCliente: string;
  fecha: string;
  emisor?: string;
  categoria: string;
  tags: string[];
  direccion?: string;
  coordenadas?: ICoordenadas;
  idVecino?: string;
  idAlerta?: string;
  observaciones?: string;
  // Virtuals
  vecino?: IVecino;
  alerta?: IAlerta;
}
