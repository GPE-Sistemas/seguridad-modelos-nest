import { IBoton, ICentroMonitoreo, ICliente } from "../..";
import { Rol } from "../../auxiliares/rol";

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
  // Virtuals
  cliente?: ICliente;
}
