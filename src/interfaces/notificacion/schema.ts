import { IConfigVecino } from '../config-vecino';
import { IVecino } from '../vecinos/vecino.model';

export interface INotificacion {
  _id?: string;
  fechaCreacion?: Date;
  leido?: boolean;
  fechaLeido?: string;
  idCliente?: string;

  /**
   * @deprecated se usa idConfigVecino
   */
  idVecino?: string;
  idConfigVecino?: string;
  titulo?: string;
  mensaje?: string;
  data?: { [key: string]: string };

  // Virtuals

  vecino?: IVecino;
  configVecino?: IConfigVecino;
}
