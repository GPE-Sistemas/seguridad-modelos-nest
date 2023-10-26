import { IConfigContacto } from './config';

export interface ICreateContacto {
  idVecino?: string;
  idContacto?: string;
  idCliente?: string;
  aprobado?: boolean;
  // Datos del Contacto
  nombre?: string;
  nombreParaMostrar?: string;
  telefono?: string;
  // Datos del Vecino
  nombreVecino?: string;
  nombreParaMostrarVecino?: string;
  telefonoVecino?: string;
  //Configs
  configs?: IConfigContacto;
}
