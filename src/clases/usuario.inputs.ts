import { OperadorInput } from './operador.input';

export class CrearUsuarioInput {
  nombre: string;
  dni?: string;
  sexo?: boolean;
  telefono?: string;
  roles: string[];
  idCliente: string;
  activo?: boolean;
  email?: string;
  direccion?: string;
  pais?: string;
  fechaNacimiento?: string;
  usuario: string;
  clave: string;
  operador: OperadorInput;
}
