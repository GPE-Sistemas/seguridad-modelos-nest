import { ICliente } from './cliente.model';
import { ICoordenadas } from './generales/coordenadas';

export interface ICentroMonitoreo {
  _id: string;
  nombre: string;
  ubicacion: ICoordenadas;
  idCliente: string;
  // Virtuals
  cliente?: ICliente;
}
