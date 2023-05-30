import { ICoordenadas } from "../generales/coordenadas";

export type IPoligono = ICoordenadas[];

export type IPolyline = ICoordenadas[];

export interface IUbicacion {
  poligono: IPoligono;
  centro?: ICoordenadas;
  superficie?: number;
}
