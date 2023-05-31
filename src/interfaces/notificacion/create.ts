export interface ICreateNotificacion {
  idCliente?: string;
  idVecino?: string;
  titulo?: string;
  mensaje?: string;
  data?: { [key: string]: string };
}
