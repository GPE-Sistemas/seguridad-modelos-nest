import {
  IApiKey,
  ICliente,
  IConfigVecino,
  IControl,
  IUsuario,
  IVecino,
} from "../..";
import { ISirena } from "./sirena.model";

export interface ITopEventosSirenaVecino {
  idConfigVecino: string;
  vecino?: string;
  /** Foto de perfil del vecino (datosPersonales.urlFoto) */
  urlFoto?: string;
  cantidad: number;
}

export interface IEventoSirena {
  _id?: string;
  chipId?: string;
  /**
   * @deprecated se usa idConfigVecino
   */
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
  tipo?: "Reflector" | "Sirena";
  origen?: string; // app | control
  motivo?: string; // alerta | sirena

  // Virtuals
  /**
   * @deprecated usar `configVecino.datosPersonales` (la colección vecinos está deprecada).
   * El virtual se mantiene solo por compatibilidad con los populate existentes.
   */
  vecino?: IVecino;
  configVecino?: IConfigVecino;
  cliente?: ICliente;
  control?: IControl;
  sirena?: ISirena;
  usuario?: IUsuario;
  idApiKey?: IApiKey;
}
