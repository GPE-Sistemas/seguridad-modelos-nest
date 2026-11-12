import { HwSirena } from './firmware-sirena.model';

export interface INuevoFirmwareSirena {
  version: string;
  file: File;
  /** Sin dato = v1 */
  hw?: HwSirena;
}

export interface ICrearFirmwareSirena {
  version: string;
  url: string;
  hw?: HwSirena;
}
