import { estados } from "./alerta-estado.dto";
import { IBoton } from "../boton/schema";
import { ICategoria } from "../categoria/schema";
import { ICentroMonitoreo } from "../centro-monitoreo/schema";
import { ICoordenadas } from "../../auxiliares/coordenadas";
import { IUsuario } from "../usuario/schema";
import { IZona } from "../zona/schema";
import {
  GeoJSONType,
  IBarrio,
  ICliente,
  ILocalidad,
  IPunto,
  IVecino,
} from "../..";

export interface IAlerta {
  _id?: string;
  activa?: boolean;
  ubicacion?: ICoordenadas;
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: "Point";
    coordinates: [number, number];
  };
  direccion?: string;
  prioridad?: number;
  estadoActual?: estados;
  fechaCreacion?: string;
  tiempoRespuesta?: number;
  tiempoResolucion?: number;
  //
  idBoton?: string;
  idCategoria?: string;
  idsCentrosMonitoreo?: string[];
  idCliente?: string;
  idUsuario?: string;
  idVecino?: string;
  idZona?: string;
  idLocalidad?: string;
  idBarrio?: string;
  idPunto?: string;

  // Virtuals
  boton?: IBoton;
  categoria?: ICategoria;
  centrosMonitoreo?: ICentroMonitoreo[];
  cliente?: ICliente;
  usuario?: IUsuario;
  vecino?: IVecino;
  zona?: IZona;
  localidad?: ILocalidad;
  barrio?: IBarrio;
  punto?: IPunto;
}
