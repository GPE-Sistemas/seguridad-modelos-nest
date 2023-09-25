export interface ICrearEventoSirena {
  chipId: string;
  idVecino?: string;
  idUsuario?: string;
  idCliente?: string;
  chipIdControl?: string;
  idApikey?: string;
  fechaEncendido?: string;
  fechaApagado?: string;
  tiempoAcumuladoEncendido?: number;
  tiempoAcumuladoApagado?: number;
  tipo?: string; // reflector | sirena
  origen?: string; // app | control
  motivo?: string; // alerta | sirena
}

export interface IUpdateEventoSirena {
  fechaApagado?: string;
  tiempoAcumuladoEncendido?: number;
  tiempoAcumuladoApagado?: number;
}

export interface IResumenEventoSirenaPorFecha {
  fecha: string;
  cantidad: number;
}
