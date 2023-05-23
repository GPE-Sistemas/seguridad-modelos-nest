import { Rol } from '../generales/rol';

export interface ICreateApiKey {
  apiName?: string;
  fechaExpiracion?: string;
  key?: string;
  idCliente?: string;
  roles?: Rol[];
}
