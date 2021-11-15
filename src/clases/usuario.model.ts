import { Cliente } from './cliente.model';
import { Operador } from './operador.model';

export class Usuario {
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
  roles: string[];
  usuario: string;
  clave: string;
  operador: Operador;
  // Virtuals
  cliente: Cliente;
}
