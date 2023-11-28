import { Rol } from "../../auxiliares/rol";

export interface IUpdateApiKey {
  apiName?: string;
  fechaCreacion?: string;
  fechaExpiracion?: string;
  idCliente?: string;
  roles?: Rol[];
}
