import { CoordenadasInput } from './coordenadas';

export class CrearZonaInput {
  nombre: string;
  coordenadas: CoordenadasInput[];
  idCliente: string;
  idsPrioridad: string[];
}

export class UpdateZonaInput {
  nombre?: string;
  coordenadas?: CoordenadasInput[];
  idsPrioridad?: string[];
}
