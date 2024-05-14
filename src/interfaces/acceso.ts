import { IUsuario, IVehiculo, IVisitante } from ".";
import { IConfigVecino } from "./config-vecino";

export interface IAcceso {
  _id?: string;
  idCliente?: string;

  /**
   * Es un id para vincular varios accesos
   */
  idAcceso?: string;

  dominio?: string;
  dni?: string;
  fechaIngreso?: string;
  fechaSalida?: string;
  observaciones?: string;

  /**
   * Vecino que aprueba el acceso
   */
  idConfigVecino?: string;

  /**
   * Usuario que crea el acceso
   */
  idUsuario?: string;

  // Virtuals
  vecino?: IConfigVecino;
  visitante?: IVisitante;
  vehiculo?: IVehiculo;
  usuario?: IUsuario;
}

type OmitirCreate = "_id" | "vecino" | "visitante" | "vehiculo" | "usuario";
export interface ICreateAcceso extends Omit<Partial<IAcceso>, OmitirCreate> {}

type OmitirUpdate = "_id" | "vecino" | "visitante" | "vehiculo" | "usuario";
export interface IUpdateAcceso extends Omit<Partial<IAcceso>, OmitirUpdate> {}

export interface INuevoAcceso {
  dominio?: string;
  dnis?: string[];
  observaciones?: string;
  idConfigVecino?: string;
}
