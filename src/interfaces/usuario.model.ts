import { IBoton, ICentroMonitoreo, ICliente } from '..';

export interface IOperador {
  idCentroMonitoreo: string;
  idsBotones: string[];
  // Virtuals
  centroMonitoreo?: ICentroMonitoreo;
  botones?: IBoton[];
}

export interface IUsuario {
  _id: string;
  activo: boolean;
  fechaCreacion: string;
  nombre: string;
  dni?: string;
  sexo?: boolean;
  idCliente: string;
  email?: string;
  direccion?: string;
  pais?: string;
  telefono?: string;
  fechaNacimiento?: string;
  roles: string[];
  usuario: string;
  clave?: string;
  operador?: IOperador;
  // Virtuals
  cliente?: ICliente;
}
