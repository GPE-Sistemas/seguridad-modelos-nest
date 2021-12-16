import { ICoordenadas } from '../..';

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
}

// Mensajes

enum TipoEventoSirena {
  AUTH_SIRENA = 'AUTH_SIRENA',
  UBICACION_SIRENA = 'UBICACION_SIRENA',
  ENCENDER_BALIZA = 'ENCENDER_BALIZA',
  APAGAR_BALIZA = 'APAGAR_BALIZA',
  ENCENDER_SONIDO = 'ENCENDER_SONIDO',
  APAGAR_SONIDO = 'APAGAR_SONIDO',
}

export interface IDataAuthSirena {
  chipId: string;
  chipKey: string;
}

export interface IDataUbicacionSirena {
  lat: number;
  lng: number;
}

export interface IDataBalizaSirena {
  id: string;
  duracion: number;
}

export interface IDataSonidoSirena {
  id: string;
  duracion: number;
}


export interface IMensajeAuthSirena {
  event: TipoEventoSirena.AUTH_SIRENA;
  data: IDataAuthSirena;
}

export interface IMensajeUbicacionSirena {
  event: TipoEventoSirena.UBICACION_SIRENA;
  data: IDataUbicacionSirena;
}

export interface IMensajeBalizaSirena {
  event: TipoEventoSirena.ENCENDER_BALIZA | TipoEventoSirena.APAGAR_BALIZA;
  data: IDataBalizaSirena;
}

export interface IMensajeSonidoSirena {
  event: TipoEventoSirena.ENCENDER_SONIDO | TipoEventoSirena.APAGAR_SONIDO;
  data: IDataSonidoSirena;
}
