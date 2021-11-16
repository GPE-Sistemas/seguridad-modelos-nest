import { ICliente } from './cliente.model';
import { IOperador } from './operador.model';

export interface IUsuario {
  _id: string;
  activo: boolean;
  fechaCreacion: string;
  nombre: string;
  dni?: string;
  sexo?: boolean;
  idCliente: string;
  email?: string;
  direccion?: string;
  pais?: string;
  telefono?: string;
  fechaNacimiento?: string;
  roles: string[];
  usuario: string;
  clave?: string;
  operador?: IOperador;
  // Virtuals
  cliente?: ICliente;
}
