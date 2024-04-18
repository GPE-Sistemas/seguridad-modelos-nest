import { EstadoReclamo } from '../reclamos';

export interface IEstadoReclamo {
  _id?: string;
  idReclamo?: string;
  idCliente?: string;
  /**
   * @deprecated se usa idConfigVecino
   */
  idVecino?: string;
  idConfigVecino?: string;
  idUsuario?: string;
  fecha?: string;
  estado?: EstadoReclamo;
  nota?: string;
  notaInterna?: string;
}
