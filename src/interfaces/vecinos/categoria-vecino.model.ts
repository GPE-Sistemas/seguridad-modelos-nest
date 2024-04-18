import { ICategoria } from '../categoria/schema';
import { IUsuario } from '../usuario/schema';
import { IArchivoVecino } from './archivo-vecino.dto';
import { IVecino } from './vecino.model';

export interface ICategoriaVecino {
  _id?: string;
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
  vecino?: IVecino;
  usuario?: IUsuario;
  archivosVecinos?: IArchivoVecino[];
}
