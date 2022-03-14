import { ICoordenadas } from "../..";
import { ICliente } from "../cliente.model";
import { ICategoriaVecino } from "./categoria-vecino.model";
import { IEnvioCodigo } from "./envio-codigo.dto";

// TODO: implementar para que el vecino autorice los permisos de envio de multimedia con las alertas
export interface IPrivacidad {
  audio: boolean;
  video: boolean;
  foto: boolean;
  ubicacion: boolean;
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
  ubicacionDireccion?: ICoordenadas;
  complementoDireccion?: string;
  pais: string;
  telefono: string;
  fechaNacimiento: string;
  envioCodigo?: IEnvioCodigo;
  categoria?: ICategoriaVecino;
  ultimoAcceso?: string;
  // Virtuals
  cliente?: ICliente;
}
