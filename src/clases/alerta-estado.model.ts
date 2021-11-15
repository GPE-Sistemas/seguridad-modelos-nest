import { Alerta } from './alerta.model';

export class AlertaEstado {
  _id: string;
  idAlerta: string;
  fecha: string;
  estado: string;
  nota: string;
  // Virtuals
  alerta?: Alerta;
}
