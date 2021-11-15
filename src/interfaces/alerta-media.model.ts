import { IAlerta } from './alerta.model';

export interface IAlertaMedia {
  _id: string;
  idAlerta: string;
  fecha: string;
  tipo: string;
  mime: string;
  url: string;
  // Virtuals
  alerta?: IAlerta;
}
