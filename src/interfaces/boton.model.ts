import { ITrackeo } from './trackeo.model';

export interface IBoton {
  _id: string;
  nombre: string;
  color: string;
  texto: string;
  urlImagen: string;
  urlImagenPush: string;
  trackeo: ITrackeo;
  editable: boolean;
}
