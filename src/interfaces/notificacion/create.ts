export interface ICreateNotificacion {
  idVecino?: string;
  titulo?: string;
  mensaje?: string;
  data?: { [key: string]: string };
}
