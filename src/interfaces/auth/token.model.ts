import { IClient } from "./client.model";
import { ITokenUser } from "./token-user";

export interface IToken {
  accessToken?: string;
  accessTokenExpiresAt?: string;
  refreshToken?: string;
  refreshTokenExpiresAt?: string;
  scope?: string | string[];
  client?: IClient;
  /** Ver `ITokenUser` y los helpers `esTokenUsuario` / `esTokenConfigVecino` / `esTokenVecinoLegacy`. */
  user?: ITokenUser;
}
