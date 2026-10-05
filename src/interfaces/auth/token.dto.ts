import { ICrearClientInput } from "./client.dto";
import { ITokenUser } from "./token-user";

export interface ICrearTokenInput {
  accessToken: string;
  accessTokenExpiresAt?: string;
  refreshToken?: string;
  refreshTokenExpiresAt?: string;
  scope?: string | string[];
  client: ICrearClientInput;
  /** Ver `ITokenUser`. Para vecinos usar la forma `ITokenUserVecino` (nunca el documento completo). */
  user: ITokenUser;
}
