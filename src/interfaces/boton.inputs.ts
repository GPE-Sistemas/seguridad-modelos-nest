import { ICrearTrackeoInput } from './trackeo.inputs';

export interface ICrearBotonInput {
  nombre: string;
  color?: string;
  texto?: string;
  urlImagen?: string;
  urlImagenPush?: string;
  trackeo: ICrearTrackeoInput;
  editable?: boolean;
}

export interface IUpdateBotonInput {
  nombre?: string;
  color?: string;
  texto?: string;
  urlImagen?: string;
  urlImagenPush?: string;
  trackeo?: ICrearTrackeoInput;
}
