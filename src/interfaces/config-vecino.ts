import { GeoJSONType, ICoordenadas } from "../auxiliares/coordenadas";
import { DireccionV2 } from "../auxiliares/direccionV2";
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
  /** URL pública (GCS) de la foto de perfil del vecino */
  urlFoto?: string;
}

/**
 * Identidad del vecino en el sistema: una config por persona y cliente.
 * Reemplaza a la colección `vecinos` (`IVecino`, deprecada). Los datos de la persona
 * viven en `datosPersonales`; las FKs nuevas son `idConfigVecino`.
 */
export interface IConfigVecino {
  _id?: string;
  idCliente?: string;
  /**
   * @deprecated FK obsoleta a la colección `vecinos`; solo para tokens legacy y datos
   * históricos. La identidad del vecino es `_id` (ConfigVecino). Las configs dadas de alta
   * sin Vecino no tienen `idVecino`.
   */
  idVecino?: string;

  activo?: boolean;
  fechaCreacion?: string;
  /**
   * Fecha en que se validó el teléfono/identidad en el alta
   * (se copia desde `IRegistro.fechaValidacion`).
   */
  fechaValidacion?: string;
  creadoPorAdmin?: boolean;
  importado?: boolean;
  dniEscaneado?: boolean;

  ultimoAcceso?: string;
  tokenPush?: string;
  appVersion?: string;
  app?: string;
  appType?: string;
  nota?: string;

  envioCodigo?: IEnvioCodigo;

  // Configs
  configs?: IConfigNotificacion; //Cambiar configs por notificaciones

  categoria?: ICategoriaVecino;
  direccion?: IDireccionVecino;

  idGrupo?: string;
  adminGrupo?: boolean;

  // Datos Personales
  datosPersonales?: IDatosPersonales;

  // Integraciones externas
  idSmartCity?: string;
  idUma?: string;

  // === Integración SOFLEX ===
  enviadoSOFLEX?: boolean; // Indica si el vecino fue sincronizado con SOFLEX
  fechaEnvioSOFLEX?: string; // Fecha del último envío exitoso a SOFLEX (ISO 8601)
  fechaUltimoIntentoSOFLEX?: string; // Último intento de alta, exitoso o no (ISO 8601). Lo usa el cron de altas para no reintentar en cada tanda

  // Virtuals
  cliente?: ICliente;
  /**
   * @deprecated usar `datosPersonales` (la colección vecinos está deprecada). El virtual se
   * mantiene solo por compatibilidad con los populate existentes.
   */
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

/**
 * Cambio de domicilio del vecino (`PUT /configvecinos/direccion` en boton-nest).
 * Movido desde `vecinos/vecino.dto.ts`; ese archivo lo re-exporta por compatibilidad.
 */
export interface IUpdateDomicilioVecino {
  direccion?: string;
  direccionV2?: DireccionV2;
  complementoDireccion?: string;
  ubicacion?: ICoordenadas;
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: GeoJSONType;
    coordinates: [number, number] | [number, number][];
  };
}

/**
 * Resumen de vecinos (configs) por cliente: `{ cliente: nombre, cantidad }`.
 * Lo devuelve `GET /configvecinos/resumenPorCliente` en seguridad-datos.
 * Movido desde `vecinos/vecino.dto.ts`; ese archivo lo re-exporta por compatibilidad.
 */
export interface IResumenVecinosPorCliente {
  cliente: string;
  cantidad: number;
}
