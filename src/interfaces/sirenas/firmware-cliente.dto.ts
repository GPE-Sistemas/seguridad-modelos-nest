export interface ICrearFirmwareCliente {
  version: string;
  idCliente: string;
  /** Versión para las placas v2 (NAC32 nuevo). Si no viene, se mantiene la que tenía el cliente. */
  versionV2?: string;
  fecha?: string;
}
