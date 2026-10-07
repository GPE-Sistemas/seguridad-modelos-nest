import { ICategoria } from '../categoria';
import { IConfigVecino } from '../config-vecino';
import { IUsuario } from '../usuario';
import { IArchivoVecino } from './archivo-vecino.dto';
import { IVecino } from './vecino.model';

export interface ICategoriaVecino {
  _id?: string;
  fechaCreacion?: string;
  desde?: string;
  hasta?: string;
  idCategoria?: string;
  /**
   * @deprecated se usa idConfigVecino
   */
  idVecino?: string;
  idConfigVecino?: string;
  idCliente?: string;
  idUsuario?: string;
  idsArchivosVecino?: string[];
  // Virtuals
  categoria?: ICategoria;
  /**
   * @deprecated usar `configVecino.datosPersonales` (la colección vecinos está deprecada).
   * El virtual se mantiene solo por compatibilidad con los populate existentes.
   */
  vecino?: IVecino;
  configVecino?: IConfigVecino;
  usuario?: IUsuario;
  archivosVecinos?: IArchivoVecino[];
}
