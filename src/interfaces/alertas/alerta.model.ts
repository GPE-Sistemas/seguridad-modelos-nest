import { estados } from './alerta-estado.dto';
import { IBoton } from '../boton.model';
import { ICategoria } from '../categoria.model';
import { ICentroMonitoreo } from '../centro-monitoreo.model';
import { ICoordenadas } from '../generales/coordenadas';
import { IUsuario } from '../usuario.model';
import { IZona } from '../zona.model';
import {
  GeoJSONType,
  IBarrio,
  ICliente,
  ILocalidad,
  IPunto,
  IVecino,
} from '../..';

export interface IAlerta {
  _id: string;
  activa: boolean;
  ubicacion: ICoordenadas;
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: 'Point';
    coordinates: [number, number];
  };
  direccion: string;
  prioridad: number;
  estadoActual: estados;
  fechaCreacion: string;
  tiempoRespuesta: number;
  tiempoResolucion: number;
  //
  idBoton: string;
  idCategoria: string;
  idsCentrosMonitoreo: string[];
  idCliente: string;
  idUsuario: string;
  idVecino: string;
  idZona: string;
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
