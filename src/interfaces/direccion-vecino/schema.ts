import { ICoordenadas } from "../generales/coordenadas";
import { DireccionV2 } from "../generales/direccionV2";

export interface IDireccionVecino {
  idVecino?: string;
  //
  idCliente?: string;
  idLocalidad?: string;
  idBarrio?: string;
  direccion?: string;
  direccionV2?: DireccionV2;
  ubicacionDireccion?: ICoordenadas;
  complementoDireccion?: string;
  geojson?: {
    type: "Point";
    coordinates: [number, number];
  };
}

type Omitir = "_id";

export interface ICreateDireccionVecino
  extends Omit<Partial<IDireccionVecino>, Omitir> {}

export interface IUpdateDireccionVecino
  extends Omit<Partial<IDireccionVecino>, Omitir> {}
