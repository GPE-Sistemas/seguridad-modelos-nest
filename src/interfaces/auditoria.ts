import { ICliente } from "./cliente";
import { IUsuario } from "./usuario/schema";
import { IVecino } from "./vecinos";

export interface IAuditoria {
  _id?: string;
  entidad?: string;
  metodo?: string;
  dato?: Object;
  idUsuario?: string;
  idCliente?: string;
  fechaCreacion?: string;
  // Populate
  usuario?: IUsuario;
  vecino?: IVecino;
  cliente?: ICliente;
}

type OmitirCreate = "_id" | "fechaCreacion" | "usuario" | "vecino" | "cliente";
export interface ICreateAuditoria
  extends Omit<Partial<IAuditoria>, OmitirCreate> {}
