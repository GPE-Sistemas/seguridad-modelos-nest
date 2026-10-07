import { IConfigContacto } from './config';

export interface IContacto {
  _id?: string;
  //
  /**
   * @deprecated usar `idConfigVecino` (`_id` del ConfigVecino dueño del contacto). Id de la colección vecinos.
   */
  idVecino?: string; // VOS
  idConfigVecino?: string;
  /**
   * @deprecated usar `idConfigVecinoContacto` (`_id` del ConfigVecino del contacto). Id de la colección vecinos.
   */
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
