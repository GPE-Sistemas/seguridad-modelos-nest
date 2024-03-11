import { ICoordenadas } from '../../auxiliares';
import { ICliente } from '../cliente';

export interface IDominioLectura {
  _id?: string;
  idCliente?: string;
  idUsuario?: string;
  dominio?: string;
  fecha?: string;
  coordeandas?: ICoordenadas;
  geojson?: {
    type: 'Point';
    coordinates: [number, number];
  };

  // Virtual
  cliente?: ICliente;
}

type OmitirCreate = '_id' | 'cliente';

export interface ICreateDominioLectura
  extends Omit<Partial<IDominioLectura>, OmitirCreate> {}

type OmitirUpdate = '_id' | 'cliente';

export interface IUpdateDominioLectura
  extends Omit<Partial<IDominioLectura>, OmitirUpdate> {}
