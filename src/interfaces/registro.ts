import { ICliente } from "./cliente";
import { IDatosPersonales, IDireccionVecino } from "./config-vecino";
import { IGrupo } from "./grupo";
import {
  ICategoriaVecino,
  IConfigNotificacion,
  IEnvioCodigo,
  IVecino,
} from "./vecinos";

export interface IRegistro {
  _id?: string;
  idCliente?: string;
  /**
   * @deprecated se usa idConfigVecino
   */
  idVecino?: string;

  activo?: boolean;
  fechaCreacion?: string;
  fechaValidacion?: string;
  creadoPorAdmin?: boolean;
  importado?: boolean;
  dniEscaneado?: boolean;

  ultimoAcceso?: string;
  tokenPush?: string;
  idSmartCity?: string;
  appVersion?: string;
  app?: string;
  appType?: string;

  envioCodigo?: IEnvioCodigo;

  // Configs
  configs?: IConfigNotificacion; //Cambiar configs por notificaciones

  categoria?: ICategoriaVecino;
  direccion?: IDireccionVecino;

  idGrupo?: string;
  adminGrupo?: boolean;

  // Datos Personales
  datosPersonales?: IDatosPersonales;

  // Virtuals
  cliente?: ICliente;
  vecino?: IVecino;
  grupo?: IGrupo;
}

type OmitirCreate = "_id" | "cliente" | "vecino" | "grupo";

export interface ICreateRegistro
  extends Omit<Partial<IRegistro>, OmitirCreate> {}

type OmitirUpdate =
  | "_id"
  | "idCliente"
  | "idVecino"
  | "cliente"
  | "vecino"
  | "grupo";

export interface IUpdateRegistro
  extends Omit<Partial<IRegistro>, OmitirUpdate> {}
