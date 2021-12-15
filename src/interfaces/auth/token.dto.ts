import { ICrearClientInput } from './client.dto';
import { IUsuario } from '../usuario.model';
import { IVecino } from '../vecino.model';

export interface ICrearTokenInput {
  accessToken: string;
  accessTokenExpiresAt?: string;
  refreshToken?: string;
  refreshTokenExpiresAt?: string;
  scope?: string | string[];
  client: ICrearClientInput;
  user: IUsuario | IVecino;
}
