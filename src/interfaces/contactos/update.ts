import { IConfigContacto } from './config';

export interface IUpdateContacto {
  /**
   * @deprecated se usa idConfigVecino
   */
  idVecino?: string; // VOS
  idConfigVecino?: string;
  idContacto?: string; // EL OTRO
  idConfigVecinoContacto?: string;
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
