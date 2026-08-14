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
  /** Envolvente de amplitud del segmento: un valor 0-100 cada 100ms, para dibujar el waveform. Lo mide el teléfono al grabar. */
  picos?: number[];
  // Virtuals
  alerta?: IAlerta;
}
