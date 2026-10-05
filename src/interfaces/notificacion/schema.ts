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

  /**
   * @deprecated usar `configVecino.datosPersonales` (la colección vecinos está deprecada).
   * El virtual se mantiene solo por compatibilidad con los populate existentes.
   */
  vecino?: IVecino;
  configVecino?: IConfigVecino;
}
