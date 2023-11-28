import { Rol } from "../../auxiliares/rol";

export interface IApiKey {
  _id?: string;
  apiName?: string;
  fechaCreacion?: string;
  fechaExpiracion?: string;
  key?: string;
  idCliente?: string;
  roles?: Rol[];
}
