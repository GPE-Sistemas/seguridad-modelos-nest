import { CategoriaVecino } from './categoria-vecino.model';

export class CrearVecinoInput {
  nombre: string;
  dni: string;
  sexo: boolean;
  telefono: string;
  idCliente: string;
  activo?: boolean;
  email?: string;
  direccion: string;
  pais?: string;
  fechaNacimiento?: string;
  categoria?: CategoriaVecino;
}

export class UpdateVecinoInput {
  activo?: boolean;
  categoria?: CategoriaVecino;
}
