import { ICrearTrackeoInput } from './trackeo.inputs';

export interface ICrearBotonInput {
  nombre: string;
  color?: string;
  texto?: string;
  urlImagen?: string;
  trackeo: ICrearTrackeoInput;
}

export interface IUpdateBotonInput {
  nombre?: string;
  color?: string;
  texto?: string;
  urlImagen?: string;
  trackeo?: ICrearTrackeoInput;
}
