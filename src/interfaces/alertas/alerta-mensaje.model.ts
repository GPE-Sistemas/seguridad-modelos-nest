export interface IAlertaMensaje {
  id?: string;
  idAlerta?: string;
  idCliente?: string;
  /**
   * @deprecated se usa idConfigVecino
   */
  idVecino?: string;
  idConfigVecino?: string;
  idUsuario?: string;
  fecha?: string;
  mensaje?: string;
  remitente?: string;
}
