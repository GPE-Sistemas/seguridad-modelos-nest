export interface ICrearClientInput {
  id: string;
  clientSecret?: string;
  grants: string[];
  redirectUris: string[];
  accessTokenLifetime: number;
  refreshTokenLifetime: number;
}
