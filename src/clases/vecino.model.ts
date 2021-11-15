import { CategoriaVecino } from './categoria-vecino.model';
import { Cliente } from './cliente.model';

export class Vecino {
  _id: string;
  activo: boolean;
  fechaCreacion: string;
  nombre: string;
  dni: string;
  sexo: boolean;
  idCliente: string;
  email: string;
  direccion: string;
  pais: string;
  telefono: string;
  fechaNacimiento: string;
  codigoValidacionSMS: string; // codigo autogenerado para validar el nro de teléfono
  categoria: CategoriaVecino;
  // Virtuals
  cliente: Cliente;
}
