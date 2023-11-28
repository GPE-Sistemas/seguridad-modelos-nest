import { IReclamo } from "./schema";

type Omitir = "_id" | "vecino" | "cliente" | "fechaCreacion";

export interface ICreateReclamo extends Omit<Partial<IReclamo>, Omitir> {}
