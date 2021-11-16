import { ICategoriaVecino } from './categoria-vecino.model';
import { ICliente } from './cliente.model';

export class IVecino {
  _id: string;
  activo: boolean;
  fechaCreacion: string;
  nombre: string;
  dni: string;
  sexo: boolean;
  idCliente: string;
  email?: string;
  direccion: string;
  pais: string;
  telefono: string;
  fechaNacimiento: string;
  codigoValidacionSMS?: string; // codigo autogenerado para validar el nro de teléfono
  categoria?: ICategoriaVecino;
  // Virtuals
  cliente?: ICliente;
}
