import { estados } from './alerta-estado.dto';
import { IAlerta } from './alerta.model';

export interface IAlertaEstado {
  _id?: string;
  idAlerta?: string;
  idCliente?: string;
  idVecino?: string;
  idConfigVecino?: string;
  idUsuario?: string;
  fecha?: string;
  estado?: estados;
  nota?: string;
  notaPredefinida?: string;
  notaInterna?: string;
  // Virtuals
  alerta?: IAlerta;
}
