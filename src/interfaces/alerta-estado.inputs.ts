
export enum estados {
    'Nueva' = 'Nueva',
    'Vista' = 'Vista',
    'En Atención' = 'En Atención',
    'En Espera' = 'En Espera',
    'Finalizada' = 'Finalizada',
}

export interface ICrearAlertaEstadoInput {
  idAlerta: string;
  estado: estados;
  nota?: string;
}
