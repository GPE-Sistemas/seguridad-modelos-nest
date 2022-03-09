export interface ICrearEstadoSirena {
  chipId: string;
  fechaOnline?: string;
  fechaOffline?: string;
  tiempoAcumuladoOnline?: number;
  tiempoAcumuladoOffline?: number;
  idCliente?: string;
  rssi?: number;
  ber?: number;
}

export interface IUpdateEstadoSirena {
  fechaOffline?: string;
  tiempoAcumuladoOnline?: number;
  tiempoAcumuladoOffline?: number;
}
