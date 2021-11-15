import { Cliente } from './cliente.model';
import { Coordenadas } from './coordenadas';

export class CentroMonitoreo {
  _id: string;
  nombre: string;
  coordenadas: Coordenadas;
  idCliente: string;
  // Virtuals
  cliente: Cliente;
}
