import { ICategoria } from "./categoria";
import { ICoordenadas } from "../auxiliares/coordenadas";

export type TipoCliente =
  | "Barrio Privado"
  | "Municipio"
  | "Provincia"
  | "Privado";

export type TipoBotonMobile =
  | "Vacio"
  | "Cobertura"
  | "Alertas"
  | "Notificaciones"
  | "Líneas de Colectivos"
  | "Reclamos"
  | "Contactos"
  | "Eventos"
  | "Perfil"
  | "Ayuda"
  | "Turnos"
  | "Tramites"
  | "Alertas Grupo"
  | "Contactos"
  | "Eventos Grupo";

export interface IConfigCliente {
  direccion?: string;
  hostSmartCity?: string;
  categoriasDeEvento?: string[];
  tagsDeEvento?: string[];
  actualizacionesFirmware?: boolean;
  cronLimiteSirenasPor100?: number;
  cronLimiteSirenasMax?: number;
  // App Monitoreo
  verActualizaciones?: boolean;
  nombreAppMonit?: string;
  tiposReclamos?: string[];
  // APP Boton
  colorInstalar?: string;
  colorMenu?: string;
  colorMenuInferior?: string;
  colorFondoBotonInferior?: string;
  colorIconoBotonInferior?: string;
  colorNavSuperior?: string;
  colorNavInferior?: string;
  mostrarMapa?: boolean;
  mostrarSirenasOffline?: boolean;
  mostrarEstadoSirenas?: boolean;
  apikeyColectivos?: string;
  // Sirenas
  distanciaCobertura?: number;
  verSirenasOnline?: boolean;
  tiposDeSirena?: string[]; // 'sirena' | 'totem' | 'sirena escolar';
  notificacionesSirenas?: boolean; // Notificacion a los vecinos que viven cerca de la sirena cuando se activa
  // Estacionamiento Medido
  unidadFija?: number;
  // Modulos a ver
  verContactos?: boolean;
  verPuntos?: boolean;
  tagsMantenimiento?: string[];
  verReclamos?: boolean;
  verEventos?: boolean;
  verEventosExternos?: boolean;
  verTurnos?: boolean;
  verGrupos?: boolean;
  verEstacionamientoMedido?: boolean;
  verColectivos?: boolean;
  // Telemedicina
  tieneTelemedicina?: boolean;

  // Config Evento Externo

  alertaEventoExterno?: string;
  activarSirena?: boolean;
  pInteresEExterno?: boolean;

  // Evento Luminaria

  alertaEventoExternoBle?: string;
  activarSirenaBle?: boolean;

  /// Config Botones del Llavero---Control con tres botones
  boton1?: TipoBoton;
  boton2?: TipoBoton;
  boton3?: TipoBoton;

  // Config de botones de menu mobile
  boton1Mobile?: TipoBotonMobile;
  boton2Mobile?: TipoBotonMobile;
  boton3Mobile?: TipoBotonMobile;

  // Restriccion uso de sierenas por vecino
  restringirUsoSirenas?: boolean;
  tiempoEntreUsoSirenas?: number; // Minutos
  cantidadMaxSirenasPorDia?: number;
  cantidadMaxSirenasPorMes?: number;
}

/// el string sería un mongoId del botón a ejecutar
export type TipoBoton = "Reflector" | "Sirena" | string;

export interface ICategoriaCliente {
  imagenArriba?: string;
  imagenAbajo?: string;
  idCategoria?: string;
  imagenSirena?: string;
  imagenReflector?: string;
  imagenAdelante?: string;
  imagenAtras?: string;
  imagenSirenaPush?: string;
  imagenReflectorPush?: string;
  imagenAdelantePush?: string;
  imagenAtrasPush?: string;
  imagenFondo?: string;
  // virtual
  categoria?: ICategoria;
}

export interface IImagenesCliente {
  icono?: string;
  lateral?: string;
  arriba?: string;
  abajo?: string;
  fondo?: string;
  sirena?: string;
  reflector?: string;
  adelante?: string;
  atras?: string;
  sirenaPush?: string;
  reflectorPush?: string;
  adelantePush?: string;
  atrasPush?: string;
}

export interface IResumenClientes {
  cliente: string;
  cantidadUsuarios: number;
  cantidadVecinos: number;
  cantidadAlertas: number;
  cantidadSirenas: number;
  cantidadPorticos: number;
  cantidadControles: number;
}

//

export interface ICliente {
  _id?: string;
  activo?: boolean;
  tipo?: TipoCliente;
  admin?: boolean;
  coordenadas?: ICoordenadas[][];
  geojson?: {
    type: "MultiPolygon";
    coordinates: [number, number][][][];
  };
  centro?: ICoordenadas;
  superficie?: number;
  fechaCreacion?: string;
  nombre?: string;
  nombreAppMobile?: string;
  edadMinima?: number;
  twitter?: string;
  instagram?: string;
  email?: string;
  sirenas?: boolean;
  porticos?: boolean;
  categorias?: ICategoriaCliente[];
  imagenes?: IImagenesCliente;
  idCategoriaDefault?: string;
  categoriasDefault?: { desde: number; hasta: number; idCategoria: string }[];
  configuracion?: IConfigCliente;
  // Virtuals
  categoriaDefault?: ICategoria;
}

type OmitirCreate = "_id";
export interface ICreateCliente extends Omit<Partial<ICliente>, OmitirCreate> {}

type OmitirUpdate = "_id";
export interface IUpdateCliente extends Omit<Partial<ICliente>, OmitirUpdate> {}
