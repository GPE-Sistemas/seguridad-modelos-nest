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
  /**
   * Lectura por monitoreo de los mensajes del vecino: cuándo y qué operador
   * abrió el chat por primera vez después de recibirlo.
   */
  fechaLectura?: string;
  idUsuarioLectura?: string;
}
