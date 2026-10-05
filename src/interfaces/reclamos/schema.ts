import { ICliente } from '../cliente';
import { IConfigVecino } from '../config-vecino';
import { IVecino } from '../vecinos/vecino.model';

export type EstadoReclamo = 'Nuevo' | 'En Proceso' | 'Finalizado';

export interface IReclamo {
  _id?: string;
  /**
   * @deprecated se usa idConfigVecino
   */
  idVecino?: string;
  idConfigVecino?: string;
  idCliente?: string;
  fechaCreacion?: string;
  fechaHecho?: string;
  denunciaPrevia?: boolean;
  documentoDenunciaPrevia?: string;
  anonimo?: boolean;
  titulo?: string;
  datos?: string;
  direccion?: string;
  observaciones?: string;
  documentos?: string[];
  requiereContacto?: boolean;

  // Estado
  estado?: EstadoReclamo;

  // Virtuals
  cliente?: ICliente;
  /**
   * @deprecated usar `configVecino.datosPersonales` (la colección vecinos está deprecada).
   * El virtual se mantiene solo por compatibilidad con los populate existentes.
   */
  vecino?: IVecino;
  configVecino?: IConfigVecino;
}
