export interface ICrearEventoSirena {
  chipId: string;
  fecha?: string;
  encendida: boolean;
  idVecino?: string;
  idCliente?: string;
  chipIdControl?: string;
  tipo?: string; // reflector | sirena
  origen?: string; // app | control
  motivo?: string; // alerta | sirena
}

export interface IResumenEventoSirenaPorFecha {
  fecha: string;
  cantidad: number;
}
