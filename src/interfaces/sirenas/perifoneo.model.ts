import { IUsuario } from "../usuario";
import { ISirena } from "./sirena.model";

/**
 * Perifoneo: voz del centro de monitoreo por la bocina de los NAC (doc "Perifoneo VoIP NAC32").
 * - grabado: fase 1. El operador graba un aviso, se sube convertido a WAV y se manda AUDIO_CLIENTE.
 * - vivo: fase 2 (P1). Sesión WebRTC/WebSocket con PERIFONEO_INICIAR / PERIFONEO_FIN.
 * - llamada: fase 3 (P3). La pide el vecino con el botón J11 (LLAMADA_SOLICITADA).
 * - escucha: fase 3 (P4). El operador escucha el micrófono del NAC.
 */
export type TipoPerifoneo = "grabado" | "vivo" | "llamada" | "escucha";

/**
 * Estado de un NAC dentro del perifoneo.
 * - grabado: enviado → reproducido (AUDIO_CLIENTE_RES) | error (ERROR_AUDIO_CLIENTE / "error sonido").
 * - vivo, llamada y escucha: los de PERIFONEO_ESTADO (conectando, activo, silenciado_sirena, finalizado).
 */
export type EstadoDestinoPerifoneo =
  | "enviado"
  | "reproducido"
  | "error"
  | "conectando"
  | "activo"
  | "silenciado_sirena"
  | "finalizado";

/** Motivos de fin de una sesión en vivo (PERIFONEO_ESTADO finalizado). */
export type MotivoFinPerifoneo =
  | "fin_operador"
  | "duracion_max"
  | "sin_audio"
  | "red"
  | "error_sesion"
  | "ocupado";

/** Transporte del audio en vivo (fase 2): opción C o, si falla la prueba de concepto, la B. */
export type TransportePerifoneo = "webrtc" | "websocket";

export interface IDestinoPerifoneo {
  chipId: string;
  idSirena?: string;
  estado: EstadoDestinoPerifoneo;
  /** Lo que contestó el equipo cuando falla (ej. "Sirena sonando") */
  mensaje?: string;
  motivo?: MotivoFinPerifoneo;
  fechaEstado?: string;
  // Virtuals
  sirena?: ISirena;
}

export interface IPerifoneo {
  _id?: string;
  idCliente?: string;
  /** Operador que lo mandó */
  idUsuario?: string;
  tipo?: TipoPerifoneo;
  /**
   * Grabado: id del audio en el bucket (`sirena-wav/<idAudio>` para v1 y `sirena-wav/v2/<idAudio>` para v2).
   * Es lo que viaja en AUDIO_CLIENTE y lo que el equipo devuelve en AUDIO_CLIENTE_RES.
   * Un reenvío crea otro perifoneo con el mismo idAudio.
   */
  idAudio?: string;
  /** Duración del audio en milisegundos */
  duracionMs?: number;
  /** Perifoneo del que se reenvió el audio */
  idPerifoneoOrigen?: string;
  /** En vivo (fase 2): id de la sala/sesión que viaja en PERIFONEO_INICIAR */
  idSesion?: string;
  transporte?: TransportePerifoneo;
  /** En vivo (fase 2): tope de la sesión (PERIFONEO_INICIAR.duracionMaxS) */
  duracionMaxS?: number;
  /** Grabación de la sesión en vivo, si se habilita (decisión abierta 5) */
  urlGrabacion?: string;
  destinos?: IDestinoPerifoneo[];
  fechaCreacion?: string;
  fechaFin?: string;
  // Virtuals
  usuario?: IUsuario;
}

type OmitirCreate = "_id" | "usuario";
export interface ICreatePerifoneo
  extends Omit<Partial<IPerifoneo>, OmitirCreate> {}

type OmitirUpdate =
  | "_id"
  | "idCliente"
  | "idUsuario"
  | "tipo"
  | "fechaCreacion"
  | "usuario";
export interface IUpdatePerifoneo
  extends Omit<Partial<IPerifoneo>, OmitirUpdate> {}

/** Cambio de estado de un NAC: lo usa sirenas-mqtt al recibir la respuesta del equipo. */
export interface IUpdateDestinoPerifoneo {
  estado: EstadoDestinoPerifoneo;
  mensaje?: string;
  motivo?: MotivoFinPerifoneo;
}

/**
 * Fase 2 (§7.3): respuesta de POST /sirenas/perifoneo/sesion, que el NAC pide por HTTPS con su chipKey para que el
 * token del audio nunca pase por el TCP sin cifrar.
 */
export interface ISesionPerifoneoNac {
  transporte: TransportePerifoneo;
  /** WHEP del canal de la sesión (`<servidor>/nac-<idSesion>/whep`) */
  url: string;
  /** Va en `Authorization: Bearer <token>`. Atado a chipId + idSesion: hay que conectarse antes de los 60 s */
  token: string;
  iceServers?: { urls: string; username?: string; credential?: string }[];
  codec: {
    nombre: "opus";
    fs: number;
    canales: number;
    tramaMs: number;
    kbps: number;
  };
}

/** Fase 2: lo que manda el NAC en POST /sirenas/perifoneo/sesion */
export interface IPedidoSesionPerifoneoNac {
  chipId: string;
  chipKey: string;
  idSesion: string;
}

/**
 * Fase 2: respuesta de POST /perifoneos/vivo de monitoreo. La consola publica el micrófono por WHIP en `url` con
 * `Authorization: Bearer <token>`. El token vale hasta `duracionMaxS` del perifoneo.
 */
export interface ISesionPerifoneoOperador {
  perifoneo: IPerifoneo;
  url: string;
  token: string;
}
