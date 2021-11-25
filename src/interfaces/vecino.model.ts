import { ICategoriaVecino } from './categoria-vecino.model';
import { ICategoria } from './categoria.model';
import { ICliente } from './cliente.model';

export interface IVecino {
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
  idCategoriaDefault: string;
  // Virtuals
  cliente?: ICliente;
  categoriaDefault?: ICategoria;
}
