## _1-_ En package.json agregar la dependencia

```
"modelos": "git://github.com/GPE-Sistemas/seguridad-modelos-nest.git"
```

## _2-_ En package.json agregar el script para actualizar

```
"modelos": "yarn upgrade modelos"
```

## _3-_ Instalar la dependencia

```
# yarn install
```

## _4-_ Importar los modelos requeridos

```
import { ICoordenadas } from 'modelos/src';
```

## Vecino deprecado — identidad = ConfigVecino

Desde la versión 1.2.0 la colección `vecinos` (`IVecino`) está deprecada: la identidad del vecino
es `IConfigVecino` (una config por persona y cliente), los datos de la persona viven en
`configVecino.datosPersonales` y las FKs nuevas son `idConfigVecino` / `idsConfigVecinos`.
`IConfigVecino.idVecino` y los campos `idVecino`/`idsVecinos`/`idContacto` quedan solo por
compatibilidad (`@deprecated`).

El `user` del token (`ITokenUser`, en `src/interfaces/auth/token-user.ts`) tiene tres formas:

- **Usuario** (operador): `IUsuario`, se reconoce con `esTokenUsuario(u)` (`!!u.usuario`).
- **Vecino, token nuevo**: `ITokenUserVecino` =
  `{ _id: config._id, tipo: 'configvecino', idConfigVecino, idCliente, idVecino? }`,
  se reconoce con `esTokenConfigVecino(u)`.
- **Vecino, token legacy**: `{ _id: vecino._id }` sin `tipo` ni `idConfigVecino`, se reconoce con
  `esTokenVecinoLegacy(u)`. Se acepta y se actualiza a la forma nueva en el primer uso.
