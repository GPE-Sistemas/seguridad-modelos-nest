import { ICrearClientInput } from "./client.dto";
import { IUsuario } from "../usuario";
import { IVecino } from "../..";

export interface ICrearTokenInput {
  accessToken: string;
  accessTokenExpiresAt?: string;
  refreshToken?: string;
  refreshTokenExpiresAt?: string;
  scope?: string | string[];
  client: ICrearClientInput;
  user: IUsuario | IVecino;
}
