import { CoordenadasInput } from './coordenadas';

export class CrearAlertaInput {
  idCliente: string;
  ubicacion: CoordenadasInput;
  idVecino: string;
  idsCentrosMonitoreo: string[];
  idZona: string;
  prioridad: number;
}

export class UpdateAlertaInput {
  activa?: boolean;
  estadoActual?: string;
  idUsuario?: string;
  tiempoRespuesta?: number;
}
