import { IBarrio } from '../barrios/barrio.model';
import { ICliente } from '../cliente';
import { ICoordenadas } from '../generales/coordenadas';
import { ILocalidad } from '../localidades/localidad.model';
import { ICategoriaVecino } from '../vecinos/categoria-vecino.model';
import { IConfigNotificacion } from '../vecinos/config-notificaciones';
import { IEnvioCodigo } from '../vecinos/envio-codigo.dto';
import { IVecino } from '../vecinos/vecino.model';

export interface IDireccionVecino {
  direccion?: string;
  complementoDireccion?: string;
  idLocalidad?: string;
  idBarrio?: string;
  ubicacionDireccion?: ICoordenadas;
  geojson?: {
    type: 'Point';
    coordinates: [number, number];
  };
  // Populate
  localidad?: ILocalidad;
  barrio?: IBarrio;
}

export interface IConfigVecino {
  _id?: string;
  idCliente?: string;
  idVecino?: string;

  ultimoAcceso?: string;
  tokenPush?: string;
  idSmartCity?: string;
  appVersion?: string;
  app?: string;
  appType?: string;

  envioCodigo?: IEnvioCodigo;

  // Configs
  configs?: IConfigNotificacion;

  categoria?: ICategoriaVecino;
  direccion?: IDireccionVecino;

  // Virtuals
  cliente?: ICliente;
  vecino?: IVecino;
}

type OmitirCreate = '_id' | 'cliente' | 'vecino';

export interface ICreateConfigVecino
  extends Omit<Partial<IConfigVecino>, OmitirCreate> {}

type OmitirUpdate = '_id' | 'idCliente' | 'idVecino' | 'cliente' | 'vecino';

export interface IUpdateConfigVecino
  extends Omit<Partial<IConfigVecino>, OmitirUpdate> {}
