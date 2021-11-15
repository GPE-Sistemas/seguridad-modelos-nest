import { IAlerta } from './alerta.model';

export interface IAlertaEstado {
  _id: string;
  idAlerta: string;
  fecha: string;
  estado: string;
  nota: string;
  // Virtuals
  alerta?: IAlerta;
}
