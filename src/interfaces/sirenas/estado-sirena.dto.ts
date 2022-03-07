export interface ICrearEstadoSirena {
  chipId: string;
  fecha: string;
  online: boolean;
  idCliente?: string;
  tiempoEstadoAnterior?: number;
  tiempoAcumuladoOnline?: number;
  tiempoAcumuladoOffline?: number;
  rssi?: number;
  ber?: number;
}
