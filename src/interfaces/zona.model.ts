import { ICentroMonitoreo } from './centro-monitoreo.model';
import { ICliente } from './cliente.model';
import { ICoordenadas } from './coordenadas';

export interface IZona {
  _id: string;
  nombre: string;
  coordenadas: ICoordenadas[];
  idCliente: string;
  idsPrioridad: string[];
  // Virtuals
  cliente?: ICliente;
  centrosMonitoreo?: ICentroMonitoreo[];
}
