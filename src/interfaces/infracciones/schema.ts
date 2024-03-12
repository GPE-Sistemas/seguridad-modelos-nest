import { ICoordenadas } from "../../auxiliares";
import { ICliente } from "../cliente";
import { IConfigVecino } from "../config-vecino";
import { IUsuario } from "../usuario";
import { IZonaEstacionamiento } from "../zona-estacionamiento";

export interface IInfraccion {
  _id?: string;
  idConfigVecino?: string;
  idCliente?: string;
  idUsuario?: string;
  idZonaEstacionamiento?: string;
  tipo?: "Estacionamiento" | "Velocidad";
  fecha?: string;
  coordenada?: ICoordenadas;
  geojson?: {
    type: "Point";
    coordinates: [number, number];
  };

  monto?: number; // unidadFija (En el cliente) * costoInfraccion
  paga?: boolean;

  idComprobante?: string; // Externo al sistema (Una factura o un comprobante de pago de pago fácil)
  fechaPago?: string;

  // Virtuals
  cliente?: ICliente;
  configVecino?: IConfigVecino;
  usuario?: IUsuario;
  zonaEstacionamiento?: IZonaEstacionamiento;
}

type OmitirCreate =
  | "_id"
  | "cliente"
  | "configVecino"
  | "usuario"
  | "zonaEstacionamiento";

export interface ICreateInfraccion
  extends Omit<Partial<IInfraccion>, OmitirCreate> {}

type OmitirUpdate =
  | "_id"
  | "cliente"
  | "configVecino"
  | "usuario"
  | "zonaEstacionamiento";

export interface IUpdateInfraccion
  extends Omit<Partial<IInfraccion>, OmitirUpdate> {}
