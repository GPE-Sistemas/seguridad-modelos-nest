import { ICliente } from "../cliente";

export interface IFirmwareCliente {
  _id?: string;
  /** Versión para las placas v1 (todas las anteriores al NAC32 nuevo) */
  version?: string;
  /** Versión para las placas v2 (NAC32 nuevo, ESP32-S3) */
  versionV2?: string;
  idCliente?: string;
  fecha?: string;

  //
  cliente?: ICliente;
}
