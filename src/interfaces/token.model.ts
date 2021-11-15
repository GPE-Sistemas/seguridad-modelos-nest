import { IClient } from './client.model';
import { IUsuario } from './usuario.model';
import { IVecino } from './vecino.model';

export class Token {
  accessToken: string;
  accessTokenExpiresAt: string;
  refreshToken?: string;
  refreshTokenExpiresAt?: Date;
  scope?: string | string[];
  client: IClient;
  user: IUsuario | IVecino;
}
