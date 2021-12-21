import { ICategoriaVecino } from "./categoria-vecino.model";
import { ICategoria } from "./categoria.model";
import { ICliente } from "./cliente.model";

// TODO: implementar para que el vecino autorice los permisos de envio de multimedia con las alertas
export interface IPrivacidad {
  audio: boolean;
  video: boolean;
  foto: boolean;
  ubicacion: boolean;
}

// TODO: implementar para controlar el pedido de SMS
export interface IEnvioCodigo {
  codigo?: string;
  cantidad?: number;
  cantidadTotal?: number;
  fechaUltimoEnvio?: string;
}

export interface IVecino {
  _id: string;
  activo: boolean;
  fechaCreacion: string;
  creadoPorAdmin: boolean;
  nombre: string;
  dni: string;
  sexo: boolean;
  idCliente: string;
  email?: string;
  direccion: string;
  pais: string;
  telefono: string;
  fechaNacimiento: string;
  codigo?: IEnvioCodigo;
  categoria?: ICategoriaVecino;
  idCategoriaDefault: string;
  // Virtuals
  cliente?: ICliente;
  categoriaDefault?: ICategoria;
}
