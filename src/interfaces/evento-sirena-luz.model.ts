import { IVecino } from './vecino.model';

export interface IEventoSirenaLuz {
  _id: string;
  chipId: string;
  fecha: string;
  encendida: boolean;
  idVecino: string;

  // Virtuals
  vecino?: IVecino;
}
