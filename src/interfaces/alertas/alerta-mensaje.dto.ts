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

/** Marca leídos los mensajes del vecino de la alerta (PUT alertaMensajes/leidos) */
export interface IMarcarLeidosAlertaMensajes {
  idAlerta: string;
  idUsuarioLectura: string;
}
