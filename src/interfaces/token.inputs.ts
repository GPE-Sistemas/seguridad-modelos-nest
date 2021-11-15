import { ICrearClientInput } from './client.inputs';
import { IUsuario } from './usuario.model';
import { IVecino } from './vecino.model';

export class CrearTokenInput {
  accessToken: string;
  accessTokenExpiresAt?: string;
  refreshToken?: string;
  refreshTokenExpiresAt?: Date;
  scope?: string | string[];
  client: ICrearClientInput;
  user: IUsuario | IVecino;
}
