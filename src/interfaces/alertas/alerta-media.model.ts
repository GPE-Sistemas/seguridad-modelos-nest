import { IAlerta } from "./alerta.model";

export interface IAlertaMedia {
  _id?: string;
  idAlerta?: string;
  idCliente?: string;
  fecha?: string;
  tipo?: string;
  mime?: string;
  url?: string;
  /** Segundos exactos del segmento (float). Lo calcula la app contando frames ADTS; alimenta el #EXTINF del m3u8. */
  duracion?: number;
  /** Índice de orden del segmento dentro de la alerta. El manifiesto ordena por acá y no por `fecha`. */
  seq?: number;
  // Virtuals
  alerta?: IAlerta;
}
