import { ICoordenadas } from '../../auxiliares';
import { ICliente } from '../cliente';

export interface IGrupo {
  _id?: string;
  idCliente?: string;

  nombre?: string;

  // Solo para grupos geograficos
  coordenadas?: ICoordenadas[];
  geojson?: {
    type: 'Polygon';
    coordinates: [number, number][][];
  };

  // Virtuals
  cliente?: ICliente;
}

type OmitirCreate = '_id' | 'cliente';

export interface ICreateGrupo extends Omit<Partial<IGrupo>, OmitirCreate> {
  /** @deprecated usar `idsConfigVecinos` (`_id` de ConfigVecino). Ids de la colección vecinos. */
  idsVecinos?: string[];
  /** @deprecated usar `idsConfigVecinosAdministradores` (`_id` de ConfigVecino). */
  idsAdministradores?: string[];
  /** `_id` de los ConfigVecino que integran el grupo. */
  idsConfigVecinos?: string[];
  /** `_id` de los ConfigVecino administradores del grupo. */
  idsConfigVecinosAdministradores?: string[];
}

type OmitirUpdate = '_id' | 'idCliente' | 'cliente';

export interface IUpdateGrupo extends Omit<Partial<IGrupo>, OmitirUpdate> {
  /** @deprecated usar `idsConfigVecinos` (`_id` de ConfigVecino). Ids de la colección vecinos. */
  idsVecinos?: string[];
  /** @deprecated usar `idsConfigVecinosAdministradores` (`_id` de ConfigVecino). */
  idsAdministradores?: string[];
  /** `_id` de los ConfigVecino que integran el grupo. */
  idsConfigVecinos?: string[];
  /** `_id` de los ConfigVecino administradores del grupo. */
  idsConfigVecinosAdministradores?: string[];
}
