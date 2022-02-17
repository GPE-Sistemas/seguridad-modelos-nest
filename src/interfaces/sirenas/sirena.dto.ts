import { ICoordenadas } from "../..";

export interface ICrearSirena {
  fechaCreacion?: string;
  versionFirmware?: string;
  chipId?: string;
  activa?: boolean;
  online?: boolean;
  ubicacionGps?: ICoordenadas;
  direccionGps?: string;
  ubicacionManual?: ICoordenadas;
  direccionManual?: string;
  idCliente?: string;
  tiempoEncendidoSonido?: number;
  tiempoEncendidoBaliza?: number;
  luzEncendida?: boolean;
  sonidoEncendido?: boolean;
  iccidSim?: string;
}

export interface IUpdateSirena {
  activa?: boolean;
  online?: boolean;
  ubicacionGps?: ICoordenadas;
  direccionGps?: string;
  ubicacionManual?: ICoordenadas;
  direccionManual?: string;
  idCliente?: string;
  luzEncendida?: boolean;
  sonidoEncendido?: boolean;
  iccidSim?: string;
}

export interface IResumenSirenasPorCliente {
  cliente: string;
  cantidad: number;
}

// Mensajes

// No anda si exporto esto
enum ETipoEventoSirena {
  AUTH_SIRENA = "AUTH_SIRENA",
  UBICACION_SIRENA = "UBICACION_SIRENA",
  ENCENDER_BALIZA = "ENCENDER_BALIZA",
  APAGAR_BALIZA = "APAGAR_BALIZA",
  ENCENDER_SONIDO = "ENCENDER_SONIDO",
  APAGAR_SONIDO = "APAGAR_SONIDO",
  BALIZA_ENCENDIDA = "BALIZA_ENCENDIDA",
  BALIZA_APAGADA = "BALIZA_APAGADA",
  SONIDO_ENCENDIDO = "SONIDO_ENCENDIDO",
  SONIDO_APAGADO = "SONIDO_APAGADO",
  COMANDO_RF = "COMANDO_RF",
  CONTROL_AGREGAR = "CONTROL_AGREGAR",
  CONTROL_BORRAR = "CONTROL_BORRAR",
  AUDIO_CLIENTE = "AUDIO_CLIENTE",
  ENCENDER_PANICO = "ENCENDER_PANICO",
}

export type TipoEventoSirena =
  | "AUTH_SIRENA"
  | "UBICACION_SIRENA"
  | "ENCENDER_BALIZA"
  | "APAGAR_BALIZA"
  | "ENCENDER_SONIDO"
  | "APAGAR_SONIDO"
  | "BALIZA_ENCENDIDA"
  | "BALIZA_APAGADA"
  | "SONIDO_ENCENDIDO"
  | "SONIDO_APAGADO"
  | "PERIFONEO"
  | "ACTUALIZAR_FIRMWARE"
  | "COMANDO_RF"
  | "CONTROL_AGREGAR"
  | "CONTROL_BORRAR"
  | "AUDIO_CLIENTE"
  | "ENCENDER_PANICO";

export interface IDataAuthSirena {
  chipId: string;
  chipKey: string;
  firmware: string;
  operador?: string;
  apn?: string;
  iccid?: string;
}

export interface IDataUbicacionSirena {
  lat: number;
  lng: number;
}

export interface IDataBalizaSirena {
  id?: string;
  chipId?: string;
  duracion?: number;
  idVecino?: string;
  idCliente?: string;
  origen?: string;
  motivo?: string;
}

export interface IDataSonidoSirena {
  id?: string;
  chipId?: string;
  sonido?: string;
  duracion?: number;
  idVecino?: string;
  idCliente?: string;
  origen?: string;
  motivo?: string;
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

export interface IDataAudioClienteSirena {
  chipId?: string;
  idAudio?: string;
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

export interface IMensajeAudioClienteSirena {
  event: ETipoEventoSirena.AUDIO_CLIENTE;
  data: IDataAudioClienteSirena;
}

export interface IMensajeSirena {
  event: TipoEventoSirena;
  data:
    | IDataBalizaSirena
    | IDataSonidoSirena
    | IDataActualizarFirmwareSirena
    | IDataPerifoneoSirena
    | IDataControlSirena
    | IDataAudioClienteSirena;
}
