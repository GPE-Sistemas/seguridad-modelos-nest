export interface IAuthSirena {
  chipId: string;
  chipKey: string;
}

export interface IComandoSirena {
  evento: 'encender sirena' | 'apagar sirena' | 'encender luz' | 'apagar luz';
  tiempo?: number;
}
