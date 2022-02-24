import { ICentroMonitoreo } from "./centro-monitoreo.model";
import { ICliente } from "./cliente.model";
import { ICoordenadas } from "./generales/coordenadas";

export interface IZona {
  _id: string;
  nombre: string;
  coordenadas: ICoordenadas[];
  superficie?: number;
  idCliente: string;
  idsPrioridad: string[];
  // Virtuals
  cliente?: ICliente;
  centrosMonitoreo?: ICentroMonitoreo[];
}
