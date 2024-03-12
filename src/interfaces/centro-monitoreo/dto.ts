import { ICoordenadas } from '../../auxiliares/coordenadas';
import { TiposCentroMonitoreo } from './schema';

export interface ICrearCentroMonitoreoInput {
  nombre: string;
  ubicacion: ICoordenadas;
  tipo?: TiposCentroMonitoreo;
  geojson?: {
    type: 'Point';
    coordinates: [number, number];
  };
  idCliente: string;
}

export interface IUpdateCentroMonitoreoInput {
  nombre?: string;
  ubicacion?: ICoordenadas;
  tipo?: TiposCentroMonitoreo;
  geojson?: {
    type: 'Point';
    coordinates: [number, number];
  };
}

export interface INuevoCentroMonitoreoInput {
  nombre: string;
  ubicacion: ICoordenadas;
  tipo?: TiposCentroMonitoreo;
  geojson?: {
    type: 'Point';
    coordinates: [number, number];
  };
}
