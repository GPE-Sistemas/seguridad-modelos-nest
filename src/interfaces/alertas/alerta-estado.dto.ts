export type Estados =
  | 'Pre Aprobada'
  | 'Nueva'
  | 'Sin Tratamiento'
  | 'Vista'
  | 'Pendiente'
  | 'En Atención'
  | 'En Espera'
  | 'En Proceso'
  | 'Liberada'
  | 'Derivada'
  | 'Derivada Finalizada'
  | 'Devuelta'
  | 'Finalizada';

export interface ICrearAlertaEstado {
  idAlerta: string;
  idCliente?: string;
  /**
   * @deprecated se usa idConfigVecino
   */
  /**
   * @deprecated se usa idConfigVecino
   */
  idVecino?: string;
  idConfigVecino?: string;
  idUsuario?: string;
  estado: Estados;
  notaPredefinida?: string;
  nota?: string;
  notaInterna?: string;
  causante?: string;
}
