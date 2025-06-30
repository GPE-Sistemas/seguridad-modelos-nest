import { ICliente } from './cliente';

export interface Credenciales {
  usuario: string; // Usuario de las credenciales
  password: string; // Password de las credenciales
  apikey?: string; // Apikey de las credenciales
}

export interface ILogReenvio {
  _id?: string;
  fechaCreacion?: string; // Está al pedo (Sort con _id hace lo mismo, pero es más fácil buscar por fecha con esta propiedad)
  idCliente?: string;
  fechaEnvio?: string; // Fecha del envío
  urlDestino?: string; // URL del destino
  credenciales?: Credenciales; // Credenciales de la API, si es que se usaron
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
