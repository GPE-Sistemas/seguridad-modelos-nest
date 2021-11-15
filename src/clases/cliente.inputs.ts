import { CoordenadasInput } from './coordenadas';

export class CrearClienteInput {
  nombre: string;
  admin?: boolean;
  edadMinima?: number;
  twitter?: string;
  idsCategorias: string[];
  coordenadas: CoordenadasInput[][];
}

export class UpdateClienteInput {
  nombre?: string;
  admin?: boolean;
  edadMinima?: number;
  twitter?: string;
  idsCategorias?: string[];
  coordenadas?: CoordenadasInput[][];
}
