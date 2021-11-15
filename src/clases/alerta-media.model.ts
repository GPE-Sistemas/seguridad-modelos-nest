import { Alerta } from './alerta.model';

export class AlertaMedia {
  _id: string;
  idAlerta: string;
  fecha: string;
  tipo: string;
  mime: string;
  url: string;
  // Virtuals
  alerta?: Alerta;
}
