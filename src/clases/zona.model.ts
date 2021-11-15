import { CentroMonitoreo } from './centro-monitoreo.model';
import { Cliente } from './cliente.model';
import { Coordenadas } from './coordenadas';

export class Zona {
  _id: string;
  nombre: string;
  coordenadas: Coordenadas[];
  idCliente: string;
  idsPrioridad: string[];
  // Virtuals
  cliente: Cliente;
  centrosMonitoreo: CentroMonitoreo[];
}
