export interface ICrearTrackeoInput {
  tiempoMinutos: number;
  intervaloSegundos: number;
  gps: boolean;
  foto: boolean;
  audio: boolean;
  video: boolean;
}

export interface ICrearBotonInput {
  nombre: string;
  color?: string;
  texto?: string;
  urlImagen?: string;
  urlImagenPush?: string;
  trackeo: ICrearTrackeoInput;
  editable?: boolean;
  sirena?: boolean;
}

export interface IUpdateBotonInput {
  nombre?: string;
  color?: string;
  texto?: string;
  urlImagen?: string;
  urlImagenPush?: string;
  trackeo?: ICrearTrackeoInput;
  sirena?: boolean;
}
