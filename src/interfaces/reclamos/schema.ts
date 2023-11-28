import { ICliente } from "../cliente";
import { IVecino } from "../vecinos/vecino.model";

export type EstadoReclamo = "Nuevo" | "En Proceso" | "Finalizado";

export interface IReclamo {
  _id?: string;
  idVecino?: string;
  idCliente?: string;
  fechaCreacion?: string;
  fechaHecho?: number;
  denunciaPrevia?: boolean;
  documentoDenunciaPrevia?: string;
  anonimo?: boolean;
  titulo?: string;
  datos?: string;
  observaciones?: string;
  documentos?: string[];
  requiereContacto?: boolean;

  // Estado
  estado?: EstadoReclamo;

  // Virtuals
  cliente?: ICliente;
  vecino?: IVecino;
}
