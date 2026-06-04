import { ICategoria } from './categoria';
import { ICoordenadas } from '../auxiliares/coordenadas';

export type TipoCliente =
  | 'Barrio Privado'
  | 'Municipio'
  | 'Provincia'
  | 'Privado';

export type TipoBotonMobile =
  | 'Vacio'
  | 'Cobertura'
  | 'Alertas'
  | 'Notificaciones'
  | 'Líneas de Colectivos'
  | 'Reclamos'
  | 'Contactos'
  | 'Eventos'
  | 'Perfil'
  | 'Ayuda'
  | 'Turnos'
  | 'Tramites'
  | 'Alertas Grupo'
  | 'Contactos'
  | 'Eventos Grupo'
  | 'Donde Voto'
  | 'EULA';

/**
 * Configuración de integración con SOFLEX
 * Contiene las credenciales y parámetros necesarios para la integración
 */
export interface IConfigClienteSoflex {
  url: string; // URL del endpoint SOFLEX
  user: string; // Usuario API asignado por SOFLEX
  password: string; // Password API (se almacena encriptado)
  providerid: string; // ID proveedor asignado por SOFLEX
  fleetid: string; // ID flota asignada por SOFLEX
  fleetName: string; // Nombre de la flota en SOFLEX
  maxReintentos?: number; // Default: 3
  tiempoEntreReintentos?: number; // Milisegundos, Default: 5000
}

/**
 * Configuración de integración con SOFLEX
 * Contiene las credenciales y parámetros necesarios para la integración
 */
export interface IConfigIrix {
  apikey?: string; // API Key para integración con Irix
  url?: string; // URL del endpoint Irix
}

/**
 * Configuración de país para el cliente
 * Define parámetros geográficos, validaciones y formatos específicos del país
 */
export interface IConfigPais {
  codigo: string; // Código ISO 3166-1 alpha-2: 'AR', 'PE', etc.
  codigoPais: string; // Código telefónico internacional: '+54', '+51', etc.
  timezone: string; // Zona horaria: '-03:00', '-05:00', etc.
  locale: string; // Locale: 'es-AR', 'es-PE', etc.
  coordenadasDefault: {
    lat: number; // Latitud por defecto para el país
    lng: number; // Longitud por defecto para el país
  };
  validaciones?: {
    telefono?: string; // Regex para validación de teléfono
    dni?: string; // Regex para validación de documento
  };
  estructuraAdministrativa?: {
    nivel1: string; // Ej: 'Provincia' | 'Departamento'
    nivel2: string; // Ej: 'Partido' | 'Provincia'
    nivel3: string; // Ej: 'Localidad' | 'Distrito'
  };
}

export interface IConfigCliente {
  direccion?: string;
  hostSmartCity?: string;
  integracionSOFLEX?: boolean;
  configSOFLEX?: IConfigClienteSoflex;
  integracionIRIX?: boolean;
  configIRIX?: IConfigIrix;
  // Filtros de eventos
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
  mostrarTodasLasSirenas?: boolean;
  apikeyColectivos?: string;
  // Sirenas
  /**
   * Cuando se superpone el poligono con otro cliente las nuevas sirenas se asignan por defecto al cliente cona la prioridad mas baja.
   */
  prioridadSirenas?: number;
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
  verSucesos?: boolean;
  verEventosExternos?: boolean;
  verTurnos?: boolean;
  verGrupos?: boolean;
  verEstacionamientoMedido?: boolean;
  verColectivos?: boolean;
  verPadron?: boolean;
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

  // Configuración SOLO PARA EVENTOS DE EZEIZA
  reenviarATito?: boolean; // DEFAULT FALSE

  // Compartir Sirenas
  idsClientesACompartirSirenas?: string[];

  mostrarEula?: boolean; // DEFAULT FALSE
  textoEula?: string; // DEFAULT ''

  // Theming de la app nativa (white-label). Color de marca → ColorScheme Material3 completo
  // (la app usa MaterialKolor). Reemplazan a los color* puntuales (que son de la web).
  colorTema?: string; // hex "#RRGGBB" — seed primario de la marca
  colorAccent?: string; // hex — secondary opcional (si null se deriva del primario)
  fuente?: string; // URL a un OTF/TTF propio del cliente (null → fuente default bundleada)

  // Textos del instructivo (3 pasos; la imagen de cada paso va en imagenes.instructivoN). Si
  // faltan, la app usa los textos default. TODO futuro: reemplazar imagen+texto por una lista de
  // bloques [{imagen, texto}] para configurar el instructivo completo.
  instructivoTexto1?: string;
  instructivoTexto2?: string;
  instructivoTexto3?: string;

  // Textos de la pantalla de permisos de la app nativa (la imagen de cada permiso va en
  // imagenes.permisoN). Si faltan, la app usa los textos default bundleados.
  permisoUbicacionTexto?: string;
  permisoCamaraTexto?: string;
  permisoMicrofonoTexto?: string;
  permisoNotificacionesTexto?: string;

  // Configuración de país
  pais?: IConfigPais;
}

/// el string sería un mongoId del botón a ejecutar
export type TipoBoton = 'Reflector' | 'Sirena' | string;

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
  // Imágenes del instructivo (3 pasos: botón / atención / sirena). Config-driven; si faltan, la app
  // usa las bundleadas por defecto.
  instructivo1?: string;
  instructivo2?: string;
  instructivo3?: string;
  // Imagen del header de login/registro (app nativa). Si falta, la app cae a icono/lateral.
  login?: string;
  // Imágenes de la pantalla de permisos de la app nativa (el texto de cada permiso va en
  // configuracion.permisoNTexto). Si faltan, la app usa las bundleadas por defecto.
  permisoUbicacion?: string;
  permisoCamara?: string;
  permisoMicrofono?: string;
  permisoNotificaciones?: string;
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
  pais?: string; // Código ISO 3166-1 alpha-2: 'AR', 'PE', etc.
  admin?: boolean;
  coordenadas?: ICoordenadas[][];
  geojson?: {
    type: 'MultiPolygon';
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
  // Identidad de la app nativa (white-label). Inmutable por build → la app móvil se resuelve por
  // estos en vez del nombre (`nombreAppMobile`), que falla por tildes/typos.
  bundleIdAndroid?: string; // applicationId Android (ej. com.gpesistemas.mialertaquilmes)
  bundleIdIOS?: string; // CFBundleIdentifier iOS (ej. ar.gpesistemas.mialertaquilmes)
  // Virtuals
  categoriaDefault?: ICategoria;
}

type OmitirCreate = '_id';
export interface ICreateCliente extends Omit<Partial<ICliente>, OmitirCreate> {}

type OmitirUpdate = '_id';
export interface IUpdateCliente extends Omit<Partial<ICliente>, OmitirUpdate> {}
