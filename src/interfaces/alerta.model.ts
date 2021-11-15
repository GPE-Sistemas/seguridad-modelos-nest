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
  prioridad: number;
  estadoActual: string;
  fechaCreacion: string;
  tiempoRespuesta: number;
  idsCentrosMonitoreo: string[];
  idZona: string;
  idVecino: string;
  idI: string;
  idCliente: string;

  // Virtuals
  zona?: IZona;
  usuario?: IUsuario;
  vecino?: IVecino;
  centrosMonitoreo?: ICentroMonitoreo[];
  cliente?: ICliente;
}
