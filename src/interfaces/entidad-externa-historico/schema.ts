export interface IEntidadExternaHistorico {
  _id?: string;
  nombre: string; // Normalizado (lowercase, trimmed)
  idCliente: string;
  idCentroMonitoreo?: string; // Opcional para scope futuro
  frecuenciaUso: number;
  fechaUltimoUso: string;
  fechaCreacion: string;
  activo: boolean;
}

type OmitirCreate = "_id";

export interface ICreateEntidadExternaHistorico
  extends Omit<Partial<IEntidadExternaHistorico>, OmitirCreate> {
  nombre: string; // Requerido
  idCliente: string; // Requerido
}

type OmitirUpdate = "_id";

export interface IUpdateEntidadExternaHistorico
  extends Omit<Partial<IEntidadExternaHistorico>, OmitirUpdate> {}
