import { EstadoReclamo } from "../reclamos";

export interface IEstadoReclamo {
  idReclamo: string;
  idCliente?: string;
  idVecino?: string;
  idUsuario?: string;
  fecha: string;
  estado: EstadoReclamo;
  nota?: string;
  notaInterna?: string;
}
