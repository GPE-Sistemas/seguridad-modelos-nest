import { ICliente } from "../cliente";
import { IConfigVecino } from "../config-vecino";
import { IVecino } from "../vecinos/vecino.model";

export type EstadoReclamo = "Nuevo" | "En Proceso" | "Finalizado";

export interface IReclamo {
  _id?: string;
  idVecino?: string;
  idConfigVecino?: string;
  idCliente?: string;
  fechaCreacion?: string;
  fechaHecho?: string;
  denunciaPrevia?: boolean;
  documentoDenunciaPrevia?: string;
  anonimo?: boolean;
  titulo?: string;
  datos?: string;
  direccion?: string;
  observaciones?: string;
  documentos?: string[];
  requiereContacto?: boolean;

  // Estado
  estado?: EstadoReclamo;

  // Virtuals
  cliente?: ICliente;
  vecino?: IVecino;
  configVecino?: IConfigVecino;
}
