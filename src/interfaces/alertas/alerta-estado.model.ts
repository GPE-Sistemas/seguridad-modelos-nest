import { estados } from './alerta-estado.dto';
import { IAlerta } from './alerta.model';

export interface IAlertaEstado {
  _id: string;
  idAlerta: string;
  fecha: string;
  estado: estados;
  nota: string;
  // Virtuals
  alerta?: IAlerta;
}
