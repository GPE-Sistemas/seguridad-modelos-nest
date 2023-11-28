import { IApiKey, ICliente, IControl, IUsuario, IVecino } from "../..";
import { ISirena } from "./sirena.model";

export interface IEventoSirena {
  _id?: string;
  chipId?: string;
  idVecino?: string;
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
  cliente?: ICliente;
  control?: IControl;
  sirena?: ISirena;
  usuario?: IUsuario;
  idApiKey?: IApiKey;
}
