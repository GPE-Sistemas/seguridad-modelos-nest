## *1-* En package.json agregar la dependencia
```
"modelos": "git://github.com/GPE-Sistemas/seguridad-modelos-nest.git"
```

## *2-* En package.json agregar el script para actualizar
```
"modelos": "yarn upgrade modelos"
```

## *3-* Instalar la dependencia
```
# yarn install
```

## *4-* Importar los modelos requeridos
```
import { ICoordenadasInput, ICoordenadas } from 'modelos/src';
```
