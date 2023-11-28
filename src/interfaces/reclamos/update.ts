import { IReclamo } from "./schema";

type Omitir = "_id" | "vecino" | "cliente" | "fechaCreacion";

export interface IUpdateReclamo extends Omit<Partial<IReclamo>, Omitir> {}
