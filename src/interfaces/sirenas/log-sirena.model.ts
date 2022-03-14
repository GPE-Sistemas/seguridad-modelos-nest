import { ISirena } from "./sirena.model";

export interface ILogSirena {
  _id: string;
  chipId: string;
  fecha: string;
  mensaje?: string;
  origen?: string;
  //
  sirena?: ISirena;
}
