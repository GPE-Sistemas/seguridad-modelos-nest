import { ICategoria } from '../categoria';
import { ICliente } from '../cliente';
import { ILocalidad } from '../localidades/schema';
import { IUsuario } from '../usuario';

export interface IConfiguracionLocalidadCategoria {
  _id?: string;
  idCliente?: string;
  idLocalidad?: string;
  idCategoria?: string;
  activo?: boolean;
  fechaCreacion?: string;
  fechaActualizacion?: string;
  idUsuarioCreacion?: string;
  idUsuarioActualizacion?: string;

  // Virtuals
  cliente?: ICliente;
  localidad?: ILocalidad;
  categoria?: ICategoria;
  usuarioCreacion?: IUsuario;
  usuarioActualizacion?: IUsuario;
}

type OmitirCreate =
  | '_id'
  | 'fechaCreacion'
  | 'fechaActualizacion'
  | 'cliente'
  | 'localidad'
  | 'categoria'
  | 'usuarioCreacion'
  | 'usuarioActualizacion';

export interface ICreateConfiguracionLocalidadCategoria
  extends Omit<Partial<IConfiguracionLocalidadCategoria>, OmitirCreate> {}

type OmitirUpdate =
  | '_id'
  | 'idCliente'
  | 'idLocalidad'
  | 'fechaCreacion'
  | 'idUsuarioCreacion'
  | 'cliente'
  | 'localidad'
  | 'categoria'
  | 'usuarioCreacion'
  | 'usuarioActualizacion';

export interface IUpdateConfiguracionLocalidadCategoria
  extends Omit<Partial<IConfiguracionLocalidadCategoria>, OmitirUpdate> {}