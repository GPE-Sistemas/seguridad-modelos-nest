import { CoordenadasInput } from './coordenadas';

export class CrearCentroMonitoreoInput {
  nombre: string;
  ubicacion: CoordenadasInput;
  idCliente: string;
}

export class UpdateCentroMonitoreoInput {
  nombre?: string;
  ubicacion?: CoordenadasInput;
}
