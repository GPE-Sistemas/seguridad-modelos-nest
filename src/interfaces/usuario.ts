import { IBoton, ICentroMonitoreo, ICliente } from '..';

export type Rol =
  | 'admin'
  | 'operador'
  | 'Operador (Sin Mensajes)'
  | 'Crear Controles'
  | 'veedor'
  | 'Enviar Notificaciones'
  | 'Administrador de sirenas'
  | 'Administrador de porticos'
  | 'Eliminar Vecinos';

export const ROLES: Rol[] = [
  'admin',
  'operador',
  'Operador (Sin Mensajes)',
  'Crear Controles',
  'veedor',
  'Enviar Notificaciones',
  'Administrador de sirenas',
  'Administrador de porticos',
  'Eliminar Vecinos',
];

export interface IOperador {
  idCentroMonitoreo: string;
  idsBotones: string[];
  // Virtuals
  centroMonitoreo?: ICentroMonitoreo;
  botones?: IBoton[];
}

export interface IUsuario {
  _id?: string;
  activo?: boolean;
  fechaCreacion?: string;
  nombre?: string;
  dni?: string;
  sexo?: boolean;
  idCliente?: string;
  email?: string;
  direccion?: string;
  pais?: string;
  telefono?: string;
  fechaNacimiento?: string;
  roles?: Rol[];
  usuario?: string;
  clave?: string;
  operador?: IOperador;
  sirenasOnline?: boolean;
  // Virtuals
  cliente?: ICliente;
}

export interface IResumenUsuariosPorCliente {
  cliente: string;
  cantidad: number;
}

type OmitirCreate = '_id';
export interface ICreateUsuario extends Omit<Partial<IUsuario>, OmitirCreate> {}

type OmitirUpdate = '_id';
export interface IUpdateUsuario extends Omit<Partial<IUsuario>, OmitirUpdate> {}
