import { Boton } from './boton.model';
import { CentroMonitoreo } from './centro-monitoreo.model';

export class Operador {
  idsCentrosMonitoreo: string[];
  idsBotones: string[];
  // Virtuals
  centrosMonitoreo?: CentroMonitoreo[];
  botones?: Boton[];
}
