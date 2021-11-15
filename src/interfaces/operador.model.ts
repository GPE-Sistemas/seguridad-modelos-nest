import { IBoton } from './boton.model';
import { ICentroMonitoreo } from './centro-monitoreo.model';

export interface IOperador {
  idsCentrosMonitoreo: string[];
  idsBotones: string[];
  // Virtuals
  centrosMonitoreo?: ICentroMonitoreo[];
  botones?: IBoton[];
}
