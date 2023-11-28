import { IEstadoReclamo } from "./schema";

type Omitir = "_id" | "vecino" | "cliente" | "fechaCreacion";

export interface ICreateEstadoReclamo
  extends Omit<Partial<IEstadoReclamo>, Omitir> {}
