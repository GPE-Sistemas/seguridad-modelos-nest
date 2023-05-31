import { IVecino } from "../vecinos/vecino.model";

export interface INotificacion {
  _id?: string;
  fechaCreacion?: Date;
  leido?: boolean;
  fechaLeido?: string;

  idVecino?: string;
  titulo?: string;
  mensaje?: string;
  data?: { [key: string]: string };

  // Virtuals

  vecino?: IVecino;
}
