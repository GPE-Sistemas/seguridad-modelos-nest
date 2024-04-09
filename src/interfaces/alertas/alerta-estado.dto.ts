export type Estados =
  | "Pre Aprobada"
  | "Nueva"
  | "Vista"
  | "En Atención"
  | "En Espera"
  | "Liberada"
  | "Derivada"
  | "Devuelta"
  | "Finalizada";

export interface ICrearAlertaEstado {
  idAlerta: string;
  idCliente?: string;
  idVecino?: string;
  idConfigVecino?: string;
  idUsuario?: string;
  estado: Estados;
  notaPredefinida?: string;
  nota?: string;
  notaInterna?: string;
  causante?: string;
}
