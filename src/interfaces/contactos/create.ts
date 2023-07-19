export interface ICreateContacto {
  idVecino?: string;
  idContacto?: string;
  aprobado?: boolean;
  // Datos del Contacto
  nombre?: string;
  telefono?: string;
  // Datos del Vecino
  nombreVecino?: string;
  telefonoVecino?: string;
}
