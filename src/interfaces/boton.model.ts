export interface ITrackeo {
  tiempoMinutos: number;
  intervaloSegundos: number;
  gps: boolean;
  foto: boolean;
  audio: boolean;
  video: boolean;
}

export type FuncionBoton = "Alerta" | "Sirena" | "Reflector" | "911";

export interface IBoton {
  _id: string;
  nombre: string;
  variante?: string;
  funcion?: FuncionBoton;
  color?: string;
  texto?: string;
  urlImagen?: string;
  urlImagenPush?: string;
  trackeo?: ITrackeo;
  editable: boolean;
  sirena?: boolean;

  // True puede mandar alertas fuera de su zona.
  global?: boolean;
  // Para elegir uno de tres sonidos
  notificacion?: string;
  // virtuals
}
