import { ICliente } from '../cliente';
import { IConfigVecino } from '../config-vecino';
import { IUsuario } from '../usuario/schema';
import { IVecino } from './vecino.model';

export interface IBaneoVecino {
  _id?: string;
  desde?: string;
  hasta?: string;
  idCliente?: string;
  /**
   * @deprecated se usa idConfigVecino
   */
  idVecino?: string;
  idConfigVecino?: string;
  tipo?: string; // 'sirenas' | 'alertas'
  idUsuario?: string;
  // Virtuals
  cliente?: ICliente;
  vecino?: IVecino;
  configVecino?: IConfigVecino;
  usuario?: IUsuario;
}
