import {
  IApiKey,
  ICliente,
  IConfigVecino,
  IControl,
  IUsuario,
  IVecino,
} from '../..';
import { ISirena } from './sirena.model';

export interface IEventoSirena {
  _id?: string;
  chipId?: string;
  idVecino?: string;
  idConfigVecino?: string;
  idUsuario?: string;
  idCliente?: string;
  chipIdControl?: string;
  idApikey?: string;
  fechaEncendido?: string;
  fechaApagado?: string;
  tiempoAcumuladoEncendido?: number;
  tiempoAcumuladoApagado?: number;
  tipo?: string; // reflector | sirena
  origen?: string; // app | control
  motivo?: string; // alerta | sirena

  // Virtuals
  vecino?: IVecino;
  configVecino?: IConfigVecino;
  cliente?: ICliente;
  control?: IControl;
  sirena?: ISirena;
  usuario?: IUsuario;
  idApiKey?: IApiKey;
}
