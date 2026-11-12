/**
 * Hardware de la placa, para elegir el binario del firmware:
 * - v1: ESP32, todas las sirenas anteriores (no informan `hw`)
 * - v2: NAC32 nuevo, ESP32-S3 (manda `hw: 'v2'` en el AUTH y `?hw=v2` al descargar)
 */
export type HwSirena = 'v1' | 'v2';

export interface IFirmwareSirena {
  _id?: string;
  version?: string;
  url?: string;
  /** Hardware al que corresponde el binario. Sin dato = v1. */
  hw?: HwSirena;
}
