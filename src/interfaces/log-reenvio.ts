import { ICliente } from './cliente';

export interface ILogReenvio {
  _id?: string;
  fechaCreacion?: string; // Está al pedo (Sort con _id hace lo mismo, pero es más fácil buscar por fecha con esta propiedad)
  idCliente?: string;
  fechaEnvio?: string; // Fecha del envío
  urlDestino?: string; // URL del destino
  tipoEnvio?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  codigoRespuesta?: number; // Código de respuesta HTTP
  respuesta?: Record<string, any>; // Seguro un json o un string
  body?: Record<string, any>; // Body del envío, si es que se envió algo

  // Virtuals
  cliente?: ICliente;
}

type Omitir = '_id' | 'cliente' | 'fechaCreacion';

export interface ICreateLogReenvio extends Omit<Partial<ILogReenvio>, Omitir> {}
export interface IUpdateLogReenvio extends Omit<Partial<ILogReenvio>, Omitir> {}
