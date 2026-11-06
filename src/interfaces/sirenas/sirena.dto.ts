import { IConfigSirena, ICoordenadas, ModeloSirena } from '../..';

export interface ICrearSirena {
  fechaCreacion?: string;
  versionFirmware?: string;
  chipId?: string;
  activa?: boolean;
  online?: boolean;
  ubicacionGps?: ICoordenadas;
  direccionGps?: string;
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: 'Point';
    coordinates: [number, number];
  };
  ubicacionManual?: ICoordenadas;
  direccionManual?: string;
  idLocalidad?: string;
  idBarrio?: string;
  idCliente?: string;
  luzEncendida?: boolean;
  sonidoEncendido?: boolean;
  iccidSim?: string;
  wakeup?: number;
  imei?: string;
  rssi?: number;
  ber?: number;
  actualizando?: boolean;
  fechaOnline?: string;
  fechaOffline?: string;
  acumuladoOnline?: number;
  acumuladoOffline?: number;
  acumuladoReflector?: number;
  acumuladoSirena?: number;
  tipo?: string;
  errorSd?: string | null;
  errorActualizacion?: boolean;
  datosHw?: {
    numeroNac?: string;
    version?: string;
    fuenteExterna?: boolean;
    fechaDeFabricacion?: string;
  };
  configs?: IConfigSirena;
  /**
   * Modelo físico de la sirena
   * NAC - Avatis - Alarcom - ETC
   */
  modeloSirena?: ModeloSirena;
}

export interface IUpdateSirena {
  activa?: boolean;
  online?: boolean;
  ubicacionGps?: ICoordenadas;
  direccionGps?: string;
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: 'Point';
    coordinates: [number, number];
  };
  ubicacionManual?: ICoordenadas;
  direccionManual?: string;
  idLocalidad?: string;
  idBarrio?: string;
  idCliente?: string;
  luzEncendida?: boolean;
  sonidoEncendido?: boolean;
  iccidSim?: string;
  wakeup?: number;
  imei?: string;
  rssi?: number;
  ber?: number;
  actualizando?: boolean;
  fechaOnline?: string;
  fechaOffline?: string;
  instaladaEn?: string;
  acumuladoOnline?: number;
  acumuladoOffline?: number;
  acumuladoReflector?: number;
  acumuladoSirena?: number;
  tipo?: string;
  errorSd?: string | null;
  errorActualizacion?: boolean;
  datosHw?: {
    numeroNac?: string;
    version?: string;
    fuenteExterna?: boolean;
    fechaDeFabricacion?: string;
  };
  // configs de la sirena
  configs?: IConfigSirena;
  /**
   * Modelo físico de la sirena
   * NAC - Avatis - Alarcom - ETC
   */
  modeloSirena?: ModeloSirena;
}

export interface IResumenSirenasPorCliente {
  cliente: string;
  cantidad: number;
}

// Mensajes

// No anda si exporto esto
enum ETipoEventoSirena {
  AUTH_SIRENA = 'AUTH_SIRENA',
  UBICACION_SIRENA = 'UBICACION_SIRENA',
  ENCENDER_BALIZA = 'ENCENDER_BALIZA',
  APAGAR_BALIZA = 'APAGAR_BALIZA',
  ENCENDER_SONIDO = 'ENCENDER_SONIDO',
  APAGAR_SONIDO = 'APAGAR_SONIDO',
  BALIZA_ENCENDIDA = 'BALIZA_ENCENDIDA',
  BALIZA_APAGADA = 'BALIZA_APAGADA',
  SONIDO_ENCENDIDO = 'SONIDO_ENCENDIDO',
  SONIDO_APAGADO = 'SONIDO_APAGADO',
  COMANDO_RF = 'COMANDO_RF',
  CONTROL_AGREGAR = 'CONTROL_AGREGAR',
  CONTROL_BORRAR = 'CONTROL_BORRAR',
  AUDIO_CLIENTE = 'AUDIO_CLIENTE',
  ENCENDER_PANICO = 'ENCENDER_PANICO',
  COMANDO_RESET = 'COMANDO_RESET',
  COMANDO_AUTH = 'COMANDO_AUTH',
  ERROR_SD = 'ERROR_SD',
  ENCENDER_BALIZA_OPERADOR = 'ENCENDER_BALIZA_OPERADOR',
  ENCENDER_SONIDO_OPERADOR = 'ENCENDER_SONIDO_OPERADOR',
  ENCENDER_PANICO_OPERADOR = 'ENCENDER_PANICO_OPERADOR',
  ENCENDER_BALIZA_CONTROL = 'ENCENDER_BALIZA_CONTROL',
  ENCENDER_SONIDO_CONTROL = 'ENCENDER_SONIDO_CONTROL',
  ENCENDER_PANICO_CONTROL = 'ENCENDER_PANICO_CONTROL',
}

enum ETipoEventoMensajeSirena {
  AUTH_SIRENA = 'AUTH_SIRENA',
  UBICACION_SIRENA = 'UBICACION_SIRENA',
  SONIDO_ENCENDIDO = 'SONIDO_ENCENDIDO',
  SONIDO_ENCENDIDO_OPERADOR = 'SONIDO_ENCENDIDO_OPERADOR',
  SONIDO_APAGADO = 'SONIDO_APAGADO',
  SONIDO_APAGADO_OPERADOR = 'SONIDO_APAGADO_OPERADOR',
  BALIZA_ENCENDIDA = 'BALIZA_ENCENDIDA',
  BALIZA_ENCENDIDA_OPERADOR = 'BALIZA_ENCENDIDA_OPERADOR',
  BALIZA_APAGADA = 'BALIZA_APAGADA',
  BALIZA_APAGADA_OPERADOR = 'BALIZA_APAGADA_OPERADOR',
  PANICO_ENCENDIDO = 'PANICO_ENCENDIDO',
  PANICO_ENCENDIDO_OPERADOR = 'PANICO_ENCENDIDO_OPERADOR',
  PANICO_APAGADO = 'PANICO_APAGADO',
  PANICO_APAGADO_OPERADOR = 'PANICO_APAGADO_OPERADOR',
  CONTROL_NO_CONOCIDO = 'CONTROL_NO_CONOCIDO',
  ERROR_SD = 'ERROR_SD',
  CONTROL_PANICO = 'CONTROL_PANICO',
}

enum ETipoEventoComandoSirena {
  ENCENDER_PANICO = 'ENCENDER_PANICO',
  ENCENDER_PANICO_OPERADOR = 'ENCENDER_PANICO_OPERADOR',
  ENCENDER_PANICO_CONTROL = 'ENCENDER_PANICO_CONTROL',
  ENCENDER_BALIZA = 'ENCENDER_BALIZA',
  ENCENDER_BALIZA_OPERADOR = 'ENCENDER_BALIZA_OPERADOR',
  ENCENDER_BALIZA_CONTROL = 'ENCENDER_BALIZA_CONTROL',
  ENCENDER_SONIDO = 'ENCENDER_SONIDO',
  ENCENDER_SONIDO_OPERADOR = 'ENCENDER_SONIDO_OPERADOR',
  ENCENDER_SONIDO_CONTROL = 'ENCENDER_SONIDO_CONTROL',
  COMANDO_RF = 'COMANDO_RF',
  CONTROL_BORRAR = 'CONTROL_BORRAR',
  CONTROL_AGREGAR = 'CONTROL_AGREGAR',
  AUDIO_CLIENTE = 'AUDIO_CLIENTE',
  COMANDO_RESET = 'COMANDO_RESET',
  ACTUALIZAR_FIRMWARE = 'ACTUALIZAR_FIRMWARE',
}

export type TipoEventoSirena =
  | 'AUTH_SIRENA'
  | 'UBICACION_SIRENA'
  | 'ENCENDER_BALIZA'
  | 'APAGAR_BALIZA'
  | 'ENCENDER_SONIDO'
  | 'APAGAR_SONIDO'
  | 'BALIZA_ENCENDIDA'
  | 'BALIZA_APAGADA'
  | 'SONIDO_ENCENDIDO'
  | 'SONIDO_APAGADO'
  | 'PERIFONEO'
  | 'ACTUALIZAR_FIRMWARE'
  | 'COMANDO_RF'
  | 'CONTROL_AGREGAR'
  | 'CONTROL_BORRAR'
  | 'AUDIO_CLIENTE'
  | 'ENCENDER_PANICO'
  | 'COMANDO_RESET'
  | 'COMANDO_AUTH'
  | 'ERROR_SD'
  | 'ENCENDER_BALIZA_OPERADOR'
  | 'ENCENDER_SONIDO_OPERADOR'
  | 'ENCENDER_PANICO_OPERADOR'
  | 'ENCENDER_BALIZA_CONTROL'
  | 'ENCENDER_SONIDO_CONTROL'
  | 'ENCENDER_PANICO_CONTROL';

export type TipoEventoMensajeSirena =
  | 'AUTH_SIRENA'
  | 'UBICACION_SIRENA'
  | 'SONIDO_ENCENDIDO'
  | 'SONIDO_ENCENDIDO_OPERADOR'
  | 'SONIDO_APAGADO'
  | 'SONIDO_APAGADO_OPERADOR'
  | 'BALIZA_ENCENDIDA'
  | 'BALIZA_ENCENDIDA_OPERADOR'
  | 'BALIZA_APAGADA'
  | 'BALIZA_APAGADA_OPERADOR'
  | 'PANICO_ENCENDIDO'
  | 'PANICO_ENCENDIDO_OPERADOR'
  | 'PANICO_APAGADO'
  | 'PANICO_APAGADO_OPERADOR'
  | 'CONTROL_NO_CONOCIDO'
  | 'ERROR_SD'
  | 'CONTROL_PANICO'
  // Respuestas a AUDIO_CLIENTE: AUDIO_CLIENTE_RES si sonó; si no, `error` con
  // `error: 'ERROR_AUDIO_CLIENTE' | 'error sonido'` y `comando_id` = idAudio (IDataErrorSirena)
  | 'AUDIO_CLIENTE_RES'
  | 'error'
  // Perifoneo en vivo y llamada del vecino (fases 2 y 3, doc Perifoneo VoIP NAC32 §7.2)
  | 'PERIFONEO_ESTADO'
  | 'LLAMADA_SOLICITADA'
  | 'LLAMADA_CANCELADA'
  // Botón de llamada del NAC32 (trama TCP 0x13): crea la alerta de la sirena y abre una sesión `microfono`
  | 'BOTON_LLAMADA';

export type TipoEventoComandoSirena =
  | 'ENCENDER_PANICO'
  | 'ENCENDER_PANICO_OPERADOR'
  | 'ENCENDER_PANICO_CONTROL'
  | 'ENCENDER_BALIZA'
  | 'ENCENDER_BALIZA_OPERADOR'
  | 'ENCENDER_BALIZA_CONTROL'
  | 'ENCENDER_SONIDO'
  | 'ENCENDER_SONIDO_OPERADOR'
  | 'ENCENDER_SONIDO_CONTROL'
  | 'COMANDO_RF'
  | 'CONTROL_BORRAR'
  | 'CONTROL_AGREGAR'
  | 'AUDIO_CLIENTE'
  | 'COMANDO_RESET'
  | 'ACTUALIZAR_FIRMWARE'
  // Perifoneo en vivo (fase 2, §7.2). No llevan credenciales: el TCP 5050 no está cifrado.
  | 'PERIFONEO_INICIAR'
  | 'PERIFONEO_FIN'
  | 'PERIFONEO_TURNO';

export interface IDataAuthSirena {
  chipId: string;
  chipKey: string;
  firmware: string;
  operador?: string;
  apn?: string;
  iccid?: string;
  wakeup?: number;
  imei?: string;
  rssi?: number;
  ber?: number;
  imsi?: string;
}

export interface IDataUbicacionSirena {
  chipId: string;
  lat: number;
  lng: number;
}

export interface IDataBalizaSirena {
  id?: string;
  chipId?: string;
  duracion?: number;
  /**
   * @deprecated usar `idConfigVecino`. Id de la colección vecinos, solo compat.
   */
  idVecino?: string;
  /** `_id` del ConfigVecino que dispara el comando (identidad actual del vecino). */
  idConfigVecino?: string;
  idCliente?: string;
  chipIdControl?: string;
  origen?: string;
  motivo?: string;
}

export interface IDataBalizaSirenaOperador {
  id?: string;
  chipId?: string;
  duracion?: number;
  idOperador?: string;
  idCliente?: string;
  chipIdControl?: string;
}

export interface IDataSonidoSirena {
  id?: string;
  chipId?: string;
  sonido?: string;
  duracion?: number;
  /**
   * @deprecated usar `idConfigVecino`. Id de la colección vecinos, solo compat.
   */
  idVecino?: string;
  /** `_id` del ConfigVecino que dispara el comando (identidad actual del vecino). */
  idConfigVecino?: string;
  idCliente?: string;
  chipIdControl?: string;
  origen?: string;
  motivo?: string;
}

export interface IDataSonidoSirenaOperador {
  id?: string;
  chipId?: string;
  sonido?: string;
  duracion?: number;
  idOperador?: string;
  idCliente?: string;
  chipIdControl?: string;
}

export interface IDataActualizarFirmwareSirena {
  url?: string;
  chipId?: string;
}

export interface IDataPerifoneoSirena {
  posicion?: number;
  url?: string;
  chipId?: string;
}

export interface IDataControlSirena {
  controles?: string[];
  chipId?: string;
  inicial?: boolean;
}

/**
 * El equipo arma la URL: GET /sirenas/sirena-wav/audio/{chipId}/{chipKey}/{idAudio}, y v2 le agrega
 * `?hw=v2&chip=esp32s3`. idAudio: letras, números, '-' y '_', hasta 64 (lo valida el firmware v2).
 * También es la forma de AUDIO_CLIENTE_RES.
 */
export interface IDataAudioClienteSirena {
  chipId?: string;
  idAudio?: string;
}

/** Evento `error` del equipo (los dos firmwares usan la misma forma) */
export interface IDataErrorSirena {
  chipId?: string;
  /** ej. 'ERROR_AUDIO_CLIENTE', 'error sonido', 'error-formato', 'error-evento' */
  error?: string;
  mensaje?: string;
  /** El id del comando que falló (idAudio en AUDIO_CLIENTE) o "null" */
  comando_id?: string;
}

/**
 * - escucha_bocina: el NAC solo reproduce la voz del operador.
 * - bidireccional: además publica su micrófono cuando el operador no habla (half-duplex).
 * - llamada: fase 3.
 * - microfono: lo abre el botón de llamada del NAC (BOTON_LLAMADA). Solo la subida del micrófono, siempre abierto y
 *   sin bajada; mediaMTX lo graba y cada trozo se guarda como audio de la alerta de la sirena.
 */
export type ModoPerifoneo =
  | 'escucha_bocina'
  | 'bidireccional'
  | 'llamada'
  | 'microfono';

/** Fase 2: backend → NAC. El NAC después pide las credenciales por HTTPS (ISesionPerifoneoNac). */
export interface IDataPerifoneoIniciar {
  chipId?: string;
  idSesion: string;
  modo: ModoPerifoneo;
  /** Por defecto 600 */
  duracionMaxS?: number;
  volumenPct?: number;
}

export interface IDataPerifoneoFin {
  chipId?: string;
  idSesion: string;
}

/**
 * Fase 2, solo `bidireccional`: el operador apretó (`hablaOperador: true`) o soltó el botón de hablar. El NAC cierra
 * el micrófono al instante sin esperar a detectar la voz, y lo vuelve a abrir al soltarlo.
 */
export interface IDataPerifoneoTurno {
  chipId?: string;
  idSesion: string;
  hablaOperador: boolean;
}

/** Fase 2: NAC → backend */
export interface IDataPerifoneoEstado {
  chipId?: string;
  idSesion: string;
  estado: 'conectando' | 'activo' | 'silenciado_sirena' | 'finalizado';
  motivo?:
    | 'fin_operador'
    | 'duracion_max'
    | 'sin_audio'
    | 'red'
    | 'error_sesion'
    | 'ocupado';
  /** Solo en sesiones `bidireccional` */
  microfono?: 'abierto' | 'cerrado' | 'no_disponible';
}

/** Fase 3: botón J11 del NAC. El operador atiende con PERIFONEO_INICIAR modo 'llamada' e idSesion = idLlamada. */
export interface IDataLlamadaSirena {
  chipId?: string;
  idLlamada: string;
  /** Solo en LLAMADA_CANCELADA: 'sin_respuesta' (60 s) o el vecino volvió a apretar */
  motivo?: string;
}

/**
 * NAC → backend al apretar el botón de llamada. El backend crea la alerta de la sirena (o sigue con la que tiene
 * activa) y contesta con PERIFONEO_INICIAR modo `microfono`.
 */
export interface IDataBotonLlamada {
  chipId?: string;
}

export interface IMensajeAuthSirena {
  event: ETipoEventoSirena.AUTH_SIRENA;
  data: IDataAuthSirena;
}

export interface IMensajeUbicacionSirena {
  event: ETipoEventoSirena.UBICACION_SIRENA;
  data: IDataUbicacionSirena;
}

export interface IMensajeBalizaSirena {
  event: ETipoEventoSirena.ENCENDER_BALIZA | ETipoEventoSirena.APAGAR_BALIZA;
  data: IDataBalizaSirena;
}

export interface IMensajeSonidoSirena {
  event: ETipoEventoSirena.ENCENDER_SONIDO | ETipoEventoSirena.APAGAR_SONIDO;
  data: IDataSonidoSirena;
}

export interface IMensajeBalizaSirenaOperador {
  event:
    | ETipoEventoSirena.ENCENDER_BALIZA_OPERADOR
    | ETipoEventoSirena.APAGAR_BALIZA;
  data: IDataBalizaSirenaOperador;
}

export interface IMensajeSonidoSirenaOperador {
  event:
    | ETipoEventoSirena.ENCENDER_SONIDO_OPERADOR
    | ETipoEventoSirena.APAGAR_SONIDO;
  data: IDataSonidoSirenaOperador;
}

export interface IMensajeAudioClienteSirena {
  event: ETipoEventoSirena.AUDIO_CLIENTE;
  data: IDataAudioClienteSirena;
}

export interface IMensajeSirena {
  event: TipoEventoMensajeSirena;
  data:
    | IDataBalizaSirena
    | IDataSonidoSirena
    | IDataActualizarFirmwareSirena
    | IDataPerifoneoSirena
    | IDataControlSirena
    | IDataAudioClienteSirena
    | IDataErrorSirena
    | IDataPerifoneoEstado
    | IDataLlamadaSirena
    | IDataBotonLlamada
    | IDataBalizaSirenaOperador
    | IDataSonidoSirenaOperador;
}

export interface IComandoSirena {
  event: TipoEventoComandoSirena;
  data:
    | IDataBalizaSirena
    | IDataSonidoSirena
    | IDataActualizarFirmwareSirena
    | IDataPerifoneoSirena
    | IDataControlSirena
    | IDataAudioClienteSirena
    | IDataPerifoneoIniciar
    | IDataPerifoneoFin
    | IDataPerifoneoTurno
    | IDataBalizaSirenaOperador
    | IDataSonidoSirenaOperador;
}

export type TipoSirena = 'sirena' | 'totem' | 'sirena escolar';
