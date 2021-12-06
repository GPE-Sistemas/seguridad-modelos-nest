import { IBoton } from './boton.model';
import { ICategoria } from './categoria.model';
import { ICentroMonitoreo } from './centro-monitoreo.model';
import { ICliente } from './cliente.model';
import { ICoordenadas } from './coordenadas';
import { IUsuario } from './usuario.model';
import { IVecino } from './vecino.model';
import { IZona } from './zona.model';

export interface IAlerta {
  _id: string;
  activa: boolean;
  ubicacion: ICoordenadas;
  direccion: string;
  prioridad: number;
  estadoActual: string;
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

  // Virtuals
  boton?: IBoton;
  categoria?: ICategoria;
  centrosMonitoreo?: ICentroMonitoreo[];
  cliente?: ICliente;
  usuario?: IUsuario;
  vecino?: IVecino;
  zona?: IZona;
}
