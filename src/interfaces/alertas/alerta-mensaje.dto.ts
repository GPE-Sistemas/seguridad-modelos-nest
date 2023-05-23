export interface ICrearAlertaMensaje {
  idAlerta?: string;
  idCliente?: string;
  idVecino?: string;
  idUsuario?: string;
  mensaje?: string;
  remitente?: string;
}

export interface IUpdateAlertaMensaje {
  mensaje?: string;
}
