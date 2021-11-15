import { CrearTrackeoInput } from './trackeo.inputs';

export class CrearBotonInput {
  nombre: string;
  color?: string;
  texto?: string;
  urlImagen?: string;
  trackeo: CrearTrackeoInput;
}

export class UpdateBotonInput {
  nombre?: string;
  color?: string;
  texto?: string;
  urlImagen?: string;
  trackeo?: CrearTrackeoInput;
}
