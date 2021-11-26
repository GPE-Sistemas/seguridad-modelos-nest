import { IBoton } from './boton.model';
import { ICentroMonitoreo } from './centro-monitoreo.model';

export interface IOperador {
  idCentroMonitoreo: string;
  idsBotones: string[];
  // Virtuals
  centroMonitoreo?: ICentroMonitoreo;
  botones?: IBoton[];
}
