export enum estados {
  'Pre Aprobada' = 'Pre Aprobada',
  'Nueva' = 'Nueva',
  'Vista' = 'Vista',
  'En Atención' = 'En Atención',
  'En Espera' = 'En Espera',
  'Liberada' = 'Liberada',
  'Finalizada' = 'Finalizada',
}

export interface ICrearAlertaEstadoInput {
  idAlerta: string;
  idCliente?: string;
  idVecino?: string;
  idConfigVecino?: string;
  idUsuario?: string;
  estado: estados;
  notaPredefinida?: string;
  nota?: string;
  notaInterna?: string;
  causante?: string;
}
