export interface IUpdateContacto {
  idVecino?: string;
  idContacto?: string;
  aprobado?: boolean;
  // Datos del Contacto
  nombre?: string;
  nombreParaMostrar?: string;
  telefono?: string;
  // Datos del Vecino
  nombreVecino?: string;
  nombreParaMostrarVecino?: string;
  telefonoVecino?: string;
}
