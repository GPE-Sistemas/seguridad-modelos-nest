import { IAlerta } from './alerta.model';
import { ICoordenadas } from './coordenadas';

export interface IAlertaUbicacion {
  _id: string;
  idAlerta: string;
  fecha: string;
  ubicacion: ICoordenadas;
  direccion: string;
  // Virtuals
  alerta?: IAlerta;
}
