export interface ICreateNotificacion {
  idCliente?: string;
  /**
   * @deprecated se usa idConfigVecino
   */
  idVecino?: string;
  idConfigVecino?: string;
  titulo?: string;
  mensaje?: string;
  data?: { [key: string]: string };
}
