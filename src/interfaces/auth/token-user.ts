import { IUsuario } from '../usuario';
import { IVecino } from '../vecinos/vecino.model';

/** Identidad de vecino que viaja en el token (forma nueva). Nunca es el documento completo. */
export interface ITokenUserVecino {
  /** `_id` del ConfigVecino en tokens nuevos; `_id` de la colección vecinos en tokens legacy */
  _id: string;
  tipo?: 'configvecino';
  idConfigVecino?: string;
  idCliente?: string;
  /** @deprecated FK a la colección vecinos, solo compat */
  idVecino?: string;
}

/**
 * Formas posibles de `IToken.user`:
 * - `IUsuario` (operadores): tiene `usuario`, `roles`, `idCliente`...
 * - `ITokenUserVecino` (vecinos, token nuevo): `{ _id: config._id, tipo: 'configvecino', idConfigVecino, idCliente, idVecino? }`
 * - `IVecino` (vecinos, token legacy ya emitido): `{ _id: vecino._id }` sin `tipo` ni `idConfigVecino`
 */
export type ITokenUser = IUsuario | IVecino | ITokenUserVecino;

export function esTokenUsuario(user: any): user is IUsuario {
  return !!user?.usuario;
}

export function esTokenConfigVecino(user: any): user is ITokenUserVecino {
  return user?.tipo === 'configvecino' || !!user?.idConfigVecino;
}

export function esTokenVecinoLegacy(user: any): boolean {
  return !!user?._id && !esTokenUsuario(user) && !esTokenConfigVecino(user);
}
