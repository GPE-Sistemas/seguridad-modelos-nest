import { ICoordenadas } from '../../auxiliares';
import { IZonaEstacionamiento } from '../zona-estacionamiento';

export interface IDominioExcento {
  _id?: string;
  dominio?: string;
  categoria?: 'Global' | 'Zona' | 'Dirección';
  //Zona
  idZonaEstacionamiento?: IZonaEstacionamiento;
  // Dirección
  direccion?: string;
  coordeandas?: ICoordenadas;
  geojson?: {
    type: 'Point';
    coordinates: [number, number];
  };

  // Virtuals
  zonaEstacionamiento?: IZonaEstacionamiento;
}

type OmitirCreate = '_id' | 'zonaEstacionamiento';

export interface ICreateDominioExcento
  extends Omit<Partial<IDominioExcento>, OmitirCreate> {}

type OmitirUpdate = '_id' | 'zonaEstacionamiento';

export interface IUpdateDominioExcento
  extends Omit<Partial<IDominioExcento>, OmitirUpdate> {}
