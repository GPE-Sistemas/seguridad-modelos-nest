import { TipoDePunto } from '../puntos';

export interface ITrackeo {
  tiempoMinutos?: number;
  intervaloSegundos?: number;
  //
  gps?: boolean;
  gpsTiempo?: number;
  gpsIntervalo?: number;
  foto?: boolean;
  fotoCantidad?: number;
  fotoIntervalo?: number;
  audio?: boolean;
  audioTiempo?: number;
  video?: boolean;
  videoTiempo?: number;
}

export interface IEnvioMultimedia {
  gps: boolean;
  foto: boolean;
  audio: boolean;
  video: boolean;
}

export type FuncionBoton =
  | 'Alerta'
  | 'Evento'
  | 'Sirena'
  | 'Reflector'
  | '911'
  | 'Link'
  | 'Alerta por Punto';

export type tipoDato =
  | 'Texto'
  | 'Texto Largo'
  | 'Numero'
  | 'Fecha'
  | 'Booleano'
  | 'Ubicación'
  | 'Foto'
  | 'Persona'
  | 'Lista de personas'
  | 'Texto (Requerido)'
  | 'Texto Largo (Requerido)'
  | 'Numero (Requerido)'
  | 'Fecha (Requerido)'
  | 'Booleano (Requerido)'
  | 'Ubicación (Requerido)'
  | 'Foto (Requerido)'
  | 'Persona (Requerido)'
  | 'Lista de personas (Requerido)';

export interface IBoton {
  _id?: string;
  nombre?: string;
  variante?: string;
  funcion?: FuncionBoton;
  tipoDePunto?: TipoDePunto[];
  color?: string;
  texto?: string;
  urlImagen?: string;
  urlImagenPush?: string;
  trackeo?: ITrackeo;
  envioMultimedia?: IEnvioMultimedia;
  editable?: boolean;
  sirena?: boolean;
  link?: string;
  // True puede mandar alertas fuera de su zona.
  global?: boolean;
  codigoSmartCity?: string;
  // Para elegir uno de tres sonidos
  notificacion?: string;
  /**
   * El evento inicia con el estado 'Finalizada'
   */
  finalizacionAutomatica?: boolean;
  /**
   * Define el estado con el que debe inciar el evento cuando el vecino pertenece a un grupo
   * true = Pre Aprobada
   * false = Nueva
   */
  requierePreAprobacion?: boolean;
  /**
   * Formulario dinamico dependiendo del tipo de evento
   */
  formulario?: { [label: string]: tipoDato };
}
