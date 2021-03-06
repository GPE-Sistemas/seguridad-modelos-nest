import { ICoordenadas } from '../..';
import { IAlerta } from './alerta.model';

export interface IAlertaUbicacion {
  _id: string;
  idAlerta: string;
  fecha: string;
  ubicacion: ICoordenadas;
  direccion: string;
  // Virtuals
  alerta?: IAlerta;
}
