import { Rol } from '../generales/rol';

export interface IApiKey {
  _id: string;
  apiName?: string;
  fechaCreacion?: string;
  fechaExpiracion?: string;
  key?: string;
  idCliente?: string;
  roles?: Rol[];
}
