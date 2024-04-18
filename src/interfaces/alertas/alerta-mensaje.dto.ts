export interface ICrearAlertaMensaje {
  idAlerta?: string;
  idCliente?: string;
  /**
   * @deprecated se usa idConfigVecino
   */
  idVecino?: string;
  idConfigVecino?: string;
  idUsuario?: string;
  mensaje?: string;
  remitente?: string;
}

export interface IUpdateAlertaMensaje {
  mensaje?: string;
}
