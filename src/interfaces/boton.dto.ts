import { FuncionBoton } from "./boton.model";

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
  variante?: string;
  funcion?: FuncionBoton;
  color?: string;
  texto?: string;
  urlImagen?: string;
  urlImagenPush?: string;
  trackeo: ICrearTrackeoInput;
  editable?: boolean;
  sirena?: boolean;
  global?: boolean;
  // Para elegir uno de tres sonidos
  notificacion?: string;
}

export interface IUpdateBotonInput {
  nombre?: string;
  variante?: string;
  funcion?: FuncionBoton;
  color?: string;
  texto?: string;
  urlImagen?: string;
  urlImagenPush?: string;
  trackeo?: ICrearTrackeoInput;
  sirena?: boolean;
  global?: boolean;
  // Para elegir uno de tres sonidos
  notificacion?: string;
}
