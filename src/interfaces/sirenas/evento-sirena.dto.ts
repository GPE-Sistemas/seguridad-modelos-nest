export interface ICrearEventoSirena {
  chipId: string;
  fecha?: string;
  encendida: boolean;
  idVecino?: string;
  idCliente?: string;
  tipo?: string; // reflector | sirena
  origen?: string; // app | control
  motivo?: string; // alerta | sirena
}
