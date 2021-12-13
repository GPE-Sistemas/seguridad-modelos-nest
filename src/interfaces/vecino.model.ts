import { ICategoriaVecino } from './categoria-vecino.model';
import { ICategoria } from './categoria.model';
import { ICliente } from './cliente.model';

// TODO: implementar para que el vecino autorice los permisos de envio de multimedia con las alertas
export interface IPrivacidad {
  audio: boolean;
  video: boolean;
  foto: boolean;
  ubicacion: boolean;
}

// TODO: implementar para controlar el pedido de SMS
export interface IEnvioCodigo {
  cantidad: number;
  fechaUltimoEnvio: string;
  fechaSiguienteEnvio: string;
}

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
  creadoPorAdmin: boolean;
  // Virtuals
  cliente?: ICliente;
  categoriaDefault?: ICategoria;
}
