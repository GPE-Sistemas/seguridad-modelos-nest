Repositorio de modelos Typescript compartidos entre los distintos servicios del sistema. Contiene las definiciones de las entidades, DTOs y otros tipos comunes que son utilizados en múltiples servicios.

Los demás servicios del sistema importan este repositorio como un paquete NPM.
## Vecino deprecado — identidad = ConfigVecino

Desde la versión 1.2.0 la colección `vecinos` (`IVecino`) está deprecada. La identidad de un
vecino es su **ConfigVecino** (`IConfigVecino`, una por persona y cliente): los datos de la
persona viven en `configVecino.datosPersonales` y las FKs nuevas son `idConfigVecino` /
`idsConfigVecinos`.

- `IConfigVecino.idVecino` es una FK obsoleta a `vecinos`: existe solo por compatibilidad
  (tokens legacy y datos históricos). Las configs dadas de alta sin Vecino no la tienen.
- `idVecino`, `idsVecinos`, `idContacto`, `ICrearVecino`, `IUpdateVecino` y los virtuals
  `vecino?: IVecino` quedan `@deprecated`; no se borran (Mongoose `strictPopulate`) hasta la
  fase C.

### Token (`IToken.user: ITokenUser`, ver `src/interfaces/auth/token-user.ts`)

| Forma | `user` | Discriminador |
| --- | --- | --- |
| Usuario (operador) | `IUsuario` (`usuario`, `roles`, `idCliente`, ...) | `esTokenUsuario(u)` → `!!u.usuario` |
| Vecino, token nuevo | `ITokenUserVecino`: `{ _id: config._id, tipo: 'configvecino', idConfigVecino, idCliente, idVecino? }` | `esTokenConfigVecino(u)` → `u.tipo === 'configvecino' \|\| !!u.idConfigVecino` |
| Vecino, token legacy | `{ _id: vecino._id }` (sin `tipo`, sin `usuario`, sin `idConfigVecino`) | `esTokenVecinoLegacy(u)` |

En el token nuevo `_id` es el `_id` del ConfigVecino; en el legacy es el `_id` de `vecinos`. Los
tokens legacy se aceptan y se actualizan a la forma nueva en el primer uso
(`PUT /oauth/token/:accessToken/user` de seguridad-datos). `idVecino` en el token nuevo es
opcional y viaja solo si la config lo tiene (compat).
