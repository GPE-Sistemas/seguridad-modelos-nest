export interface ITrackeo {
  tiempoMinutos: number;
  intervaloSegundos: number;
  gps: boolean;
  foto: boolean;
  audio: boolean;
  video: boolean;
}

export interface IBoton {
  _id: string;
  nombre: string;
  color: string;
  texto: string;
  urlImagen: string;
  urlImagenPush: string;
  trackeo: ITrackeo;
  editable: boolean;
  sirena?: boolean;
}
