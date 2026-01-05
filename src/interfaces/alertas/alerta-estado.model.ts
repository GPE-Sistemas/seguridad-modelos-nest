import { Estados } from './alerta-estado.dto';
import { IAlertaMedia } from './alerta-media.model';
import { IAlerta } from './alerta.model';

export interface IAlertaEstado {
  _id?: string;
  idAlerta?: string;
  idCliente?: string;
  /**
   * @deprecated se usa idConfigVecino
   */
  idVecino?: string;
  idConfigVecino?: string;
  idUsuario?: string;
  fecha?: string;
  estado?: Estados;
  nota?: string;
  notaPredefinida?: string;
  multimedia?: IAlertaMedia[];
  notaInterna?: string;
  // Virtuals
  alerta?: IAlerta;
}
