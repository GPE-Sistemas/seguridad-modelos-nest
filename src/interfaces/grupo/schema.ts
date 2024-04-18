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
  idsVecinos?: string[];
  idsAdministradores?: string[];
}

type OmitirUpdate = '_id' | 'idCliente' | 'cliente';

export interface IUpdateGrupo extends Omit<Partial<IGrupo>, OmitirUpdate> {
  idsVecinos?: string[];
  idsAdministradores?: string[];
}
