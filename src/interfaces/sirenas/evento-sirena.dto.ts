export interface ICrearEventoSirena {
  chipId: string;
  fecha?: string;
  encendida: boolean;
  idVecino?: string;
  idCliente?: string;
  tipo?: string; // reflector | sirena | alerta
  origen?: string; // app | control
}
