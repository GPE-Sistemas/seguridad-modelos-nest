import { IVecino } from '../vecino.model';

export interface IEventoSirenaSonido {
  _id: string;
  chipId: string;
  fecha: string;
  encendida: boolean;
  idVecino: string;

  // Virtuals
  vecino?: IVecino;
}
