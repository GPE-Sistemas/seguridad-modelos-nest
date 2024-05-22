import { Estados } from "./alerta-estado.dto";
import { ICategoria } from "../categoria";
import { ICentroMonitoreo } from "../centro-monitoreo/schema";
import { ICoordenadas } from "../../auxiliares/coordenadas";
import { IUsuario } from "../usuario/schema";
import { IZona } from "../zona/schema";
import {
  IBarrio,
  IBoton,
  ICliente,
  IConfigVecino,
  IGrupo,
  ILocalidad,
  IPunto,
  IVecino,
} from "../..";

export interface IAlerta {
  _id?: string;
  tipo?: "Emergencia" | "Evento";

  activa?: boolean;
  ubicacion?: ICoordenadas;
  geojson?: {
    type: "Point";
    coordinates: [number, number];
  };
  direccion?: string;
  prioridad?: number;
  estadoActual?: Estados;
  fechaCreacion?: string;
  tiempoRespuesta?: number;
  tiempoResolucion?: number;
  //
  idBoton?: string;
  idCategoria?: string;
  idsCentrosMonitoreo?: string[];
  idCentroDerivado?: string; // Este centro de monitoreo solo la ve cuando el centro principal le deriva la alerta
  idCliente?: string;
  idUsuario?: string;
  idOperador?: string; // Este ID es para identificar si la alerta la creó un operador
  /**
   * @deprecated se usa idConfigVecino
   */
  idVecino?: string;
  idConfigVecino?: string;
  idZona?: string;
  idLocalidad?: string;
  idBarrio?: string;
  idPunto?: string;
  idGrupo?: string; // Agrupacion de vecinos que la pueden ver (barrios cerrados y autogestion de alertas)

  // Para eventos
  formulario?: Record<string, any>; // Formulario de datos del evento

  // Virtuals
  boton?: IBoton;
  categoria?: ICategoria;
  centrosMonitoreo?: ICentroMonitoreo[];
  centroDerivado?: ICentroMonitoreo;
  cliente?: ICliente;
  usuario?: IUsuario;
  vecino?: IVecino;
  configVecino?: IConfigVecino;
  zona?: IZona;
  localidad?: ILocalidad;
  barrio?: IBarrio;
  punto?: IPunto;
  grupo?: IGrupo;
  operador?: IUsuario;
}
