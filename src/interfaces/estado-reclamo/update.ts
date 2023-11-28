import { IEstadoReclamo } from "./schema";

type Omitir = "_id" | "vecino" | "cliente" | "fechaCreacion";

export interface IUpdateEstadoReclamo
  extends Omit<Partial<IEstadoReclamo>, Omitir> {}
