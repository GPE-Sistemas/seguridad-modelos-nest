enum TipoEventoSirena {
  AUTH_SIRENA = 'AUTH_SIRENA',
  UBICACION_SIRENA = 'UBICACION_SIRENA',
  ENCENDER_BALIZA = 'ENCENDER_BALIZA',
  APAGAR_BALIZA = 'APAGAR_BALIZA',
  ENCENDER_SONIDO = 'ENCENDER_SONIDO',
  APAGAR_SONIDO = 'APAGAR_SONIDO',
}

interface IDataAuthSirena {
  chipId: string;
  chipKey: string;
}

interface IDataUbicacionSirena {
  lat: number;
  lng: number;
}

interface IDataBalizaSirena {
  id: string;
  duracion: number;
  error?: any;
}

interface IDataSonidoSirena {
  id: string;
  duracion: number;
  error?: any;
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
