import { FuncionBoton, IEnvioMultimedia } from './boton.model';
import { TipoDePunto } from './puntos';

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
  tipoDePunto?: TipoDePunto[];
  color?: string;
  texto?: string;
  urlImagen?: string;
  urlImagenPush?: string;
  trackeo: ICrearTrackeoInput;
  envioMultimedia?: IEnvioMultimedia;
  editable?: boolean;
  sirena?: boolean;
  global?: boolean;
  codigoSmartCity?: string;
  link?: string;
  // Para elegir uno de tres sonidos
  notificacion?: string;
  // para que el botón no sirva para nada
  finalizacionAutomatica?: boolean;
}

export interface IUpdateBotonInput {
  nombre?: string;
  variante?: string;
  funcion?: FuncionBoton;
  tipoDePunto?: TipoDePunto[];
  color?: string;
  texto?: string;
  urlImagen?: string;
  urlImagenPush?: string;
  trackeo?: ICrearTrackeoInput;
  envioMultimedia?: IEnvioMultimedia;
  sirena?: boolean;
  global?: boolean;
  codigoSmartCity?: string;
  link?: string;
  // Para elegir uno de tres sonidos
  notificacion?: string;
  // para que el botón no sirva para nada
  finalizacionAutomatica?: boolean;
}
