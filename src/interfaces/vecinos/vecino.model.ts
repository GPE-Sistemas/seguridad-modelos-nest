import { DireccionV2, ICoordenadas } from "../..";
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
  importado?: boolean;
  dniEscaneado?: boolean;
  nombre: string;
  dni: string;
  sexo?: boolean | null;
  idCliente: string;
  email?: string;
  /**
   * @deprecated Esta propiedad se reemplazó por 'DireccionV2'
   */
  direccion: string;
  direccionV2?: DireccionV2;
  /**
   * @deprecated Esta propiedad se reemplazó por 'DireccionV2'
   */
  ubicacionDireccion?: ICoordenadas;
  complementoDireccion?: string;
  pais: string;
  telefono: string;
  fechaNacimiento: string;
  envioCodigo?: IEnvioCodigo;
  categoria?: ICategoriaVecino;
  ultimoAcceso?: string;
  tokenPush?: string;
  idSmartCity?: string;
  // Virtuals
  cliente?: ICliente;
}
