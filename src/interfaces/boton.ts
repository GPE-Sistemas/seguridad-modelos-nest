import { TipoDePunto } from './puntos';

export interface ICrearTrackeoInput {
  tiempoMinutos?: number;
  intervaloSegundos?: number;
  gps?: boolean;
  foto?: boolean;
  audio?: boolean;
  video?: boolean;
}

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

export interface IEnvioEmail {
  cliente?: boolean;
  usuario?: boolean;
}

export type FuncionBoton =
  | 'Alerta'
  | 'Evento'
  | 'Sirena'
  | 'Reflector'
  | '911'
  | 'Link'
  | 'Alerta por Punto'
  | 'Telemedicina';

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
  | 'Dirección' // Autocomplete
  | 'Texto (Requerido)'
  | 'Texto Largo (Requerido)'
  | 'Numero (Requerido)'
  | 'Fecha (Requerido)'
  | 'Booleano (Requerido)'
  | 'Ubicación (Requerido)'
  | 'Foto (Requerido)'
  | 'Persona (Requerido)'
  | 'Lista de personas (Requerido)'
  | 'Dirección (Requerido)'; // Autocomplete;

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
  envioEmail?: IEnvioEmail;
  editable?: boolean;
  sirena?: boolean;
  link?: string;
  // True puede mandar alertas fuera de su zona.
  global?: boolean;
  // Sirve para los eventos externos
  prioridad?: number;
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
  // Configuración SOLO PARA EVENTOS DE EZEIZA
  reenviarATito?: boolean;
  //
  telemedicina?: string; // URL del servicio de telemedicina (Hay que meterle un token al final.) Se usa en el la funcion Telemedicina
  /**
   * Formulario dinamico dependiendo del tipo de evento
   */
  formulario?: { [label: string]: tipoDato };
}

type OmitirCreate = '_id';
export interface ICreateBoton extends Omit<Partial<IBoton>, OmitirCreate> {}

type OmitirUpdate = '_id';
export interface IUpdateBoton extends Omit<Partial<IBoton>, OmitirUpdate> {}
