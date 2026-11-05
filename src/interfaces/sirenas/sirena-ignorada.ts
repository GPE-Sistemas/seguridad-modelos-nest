/**
 * Admision gradual de sirenas nuevas (seguridad-api-sirenas-mqtt).
 * Cuando se conectan muchas sirenas nuevas solo se admite un porcentaje; el
 * resto queda registrado aca como `ignorada` hasta que se habilita a mano.
 * - ignorada: no se crea como dispositivo ni se le responde.
 * - habilitada: se habilito manualmente; al reconectar entra por el flujo normal.
 */
export type EstadoSirenaIgnorada = "ignorada" | "habilitada";

export interface ISirenaIgnorada {
  _id?: string;
  chipId: string;
  estado: EstadoSirenaIgnorada;
  fechaIgnorada: string;
  fechaHabilitada?: string;
}

type OmitirCrear = "_id";
export interface ICrearSirenaIgnorada
  extends Omit<Partial<ISirenaIgnorada>, OmitirCrear> {}

type OmitirUpdate = "_id" | "chipId" | "fechaIgnorada";
export interface IUpdateSirenaIgnorada
  extends Omit<Partial<ISirenaIgnorada>, OmitirUpdate> {}
