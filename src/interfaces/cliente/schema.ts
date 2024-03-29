import { ICategoria } from "../categoria/schema";
import { ICoordenadas } from "../../auxiliares/coordenadas";

export type TipoCliente = "Barrio Privado" | "Municipio" | "Provincia";
export interface ICliente {
  _id?: string;
  activo?: boolean;
  tipo?: TipoCliente;
  admin?: boolean;
  coordenadas?: ICoordenadas[][];
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
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
  sirenas?: boolean;
  categorias?: ICategoriaCliente[];
  imagenes?: IImagenesCliente;
  idCategoriaDefault?: string;
  categoriasDefault?: { desde: number; hasta: number; idCategoria: string }[];
  configuracion?: IConfigCliente;
  // Virtuals
  categoriaDefault?: ICategoria;
}

export interface IConfigCliente {
  hostSmartCity?: string;
  categoriasDeEvento?: string[];
  tagsDeEvento?: string[];
  actualizacionesFirmware?: boolean;
  cronLimiteSirenasPor100?: number;
  cronLimiteSirenasMax?: number;
  // App Monitoreo
  verActualizaciones?: boolean;
  nombreAppMonit?: string;
  // APP Boton
  colorInstalar?: string;
  colorMenu?: string;
  mostrarMapa?: boolean;
  mostrarSirenasOffline?: boolean;
  mostrarEstadoSirenas?: boolean;
  // Sirenas
  distanciaCobertura?: number;
  verSirenasOnline?: boolean;
  tiposDeSirena?: string[]; // 'sirena' | 'totem' | 'sirena escolar';
  // Estacionamiento Medido
  unidadFija?: number;
  // Modulos a ver
  verContactos?: boolean;
  verPuntos?: boolean;
  tagsMantenimiento?: string[];
  verReclamos?: boolean;
  verEventos?: boolean;
  verTurnos?: boolean;
  verGrupos?: boolean;
  verEstacionamientoMedido?: boolean;
  verColectivos?: boolean;
}

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
