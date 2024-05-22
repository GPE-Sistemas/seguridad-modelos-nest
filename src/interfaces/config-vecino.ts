import { ICoordenadas } from "../auxiliares/coordenadas";
import { IBarrio } from "./barrio";
import { ICliente } from "./cliente";
import { IGrupo } from "./grupo";
import { ILocalidad } from "./localidades/schema";
import { ICategoriaVecino } from "./vecinos/categoria-vecino.model";
import { IConfigNotificacion } from "./vecinos/config-notificaciones";
import { IEnvioCodigo } from "./vecinos/envio-codigo.dto";
import { IVecino } from "./vecinos/vecino.model";

export interface IDireccionVecino {
  direccion?: string;
  complementoDireccion?: string;
  idLocalidad?: string;
  idBarrio?: string;
  ubicacionDireccion?: ICoordenadas;
  geojson?: {
    type: "Point";
    coordinates: [number, number];
  };
  // Populate
  localidad?: ILocalidad;
  barrio?: IBarrio;
}

export interface IDatosPersonales {
  nombre?: string;
  dni?: string;
  sexo?: boolean | null;
  email?: string;
  pais?: string;
  telefono?: string;
  fechaNacimiento?: string;
}

export interface IConfigVecino {
  _id?: string;
  idCliente?: string;
  /**
   * @deprecated se usa idConfigVecino
   */
  idVecino?: string;

  activo?: boolean;
  fechaCreacion?: string;
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

export interface ICreateConfigVecino
  extends Omit<Partial<IConfigVecino>, OmitirCreate> {}

type OmitirUpdate =
  | "_id"
  | "idCliente"
  | "idVecino"
  | "cliente"
  | "vecino"
  | "grupo";

export interface IUpdateConfigVecino
  extends Omit<Partial<IConfigVecino>, OmitirUpdate> {}
