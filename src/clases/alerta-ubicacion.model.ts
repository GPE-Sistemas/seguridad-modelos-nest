import { Alerta } from './alerta.model';
import { Coordenadas } from './coordenadas';

export class AlertaUbicacion {
  _id: string;
  idAlerta: string;
  fecha: string;
  ubicacion: Coordenadas;
  // Virtuals
  alerta?: Alerta;
}
