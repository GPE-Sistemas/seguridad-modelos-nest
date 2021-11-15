import { CentroMonitoreo } from './centro-monitoreo.model';
import { Cliente } from './cliente.model';
import { Coordenadas } from './coordenadas';
import { Usuario } from './usuario.model';
import { Vecino } from './vecino.model';
import { Zona } from './zona.model';

export class Alerta {
  _id: string;
  activa: boolean;
  ubicacion: Coordenadas;
  prioridad: number;
  estadoActual: string;
  fechaCreacion: string;
  tiempoRespuesta: number;
  idsCentrosMonitoreo: string[];
  idZona: string;
  idVecino: string;
  idUsuario: string;
  idCliente: string;

  // Virtuals
  zona?: Zona;
  usuario?: Usuario;
  vecino?: Vecino;
  centrosMonitoreo?: CentroMonitoreo[];
  cliente?: Cliente;
}
