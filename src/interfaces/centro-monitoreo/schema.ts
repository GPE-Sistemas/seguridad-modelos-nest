import { ICliente } from "../cliente";
import { ICoordenadas } from "../../auxiliares/coordenadas";

export type TiposCentroMonitoreo = "Normal" | "Derivado";

export interface ICentroMonitoreo {
  _id?: string;
  nombre?: string;
  tipo?: TiposCentroMonitoreo;
  ubicacion?: ICoordenadas;
  geojson?: {
    type: "Point";
    coordinates: [number, number];
  };
  idCliente?: string;
  // Virtuals
  cliente?: ICliente;
}
