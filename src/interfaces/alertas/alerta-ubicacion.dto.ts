import { GeoJSONType, ICoordenadas } from '../..';

export interface ICrearAlertaUbicacionInput {
  idAlerta: string;
  idCliente?: string;
  ubicacion: ICoordenadas;
  geojson?: {
    type: 'Point';
    coordinates: [number, number];
  };
  direccion?: string;
}
