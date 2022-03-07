export interface ICrearEventoSirena {
  chipId: string;
  fecha?: string;
  encendida: boolean;
  idVecino?: string;
  idCliente?: string;
  chipIdControl?: string;
  tiempoEstadoAnterior?: number;
  tiempoAcumuladoEncendido?: number;
  tiempoAcumuladoApagado?: number;
  tipo?: string; // reflector | sirena
  origen?: string; // app | control
  motivo?: string; // alerta | sirena
}

export interface IResumenEventoSirenaPorFecha {
  fecha: string;
  cantidad: number;
}
