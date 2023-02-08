import { ICategoriaCliente, IImagenesCliente } from './cliente.model';
import { ICoordenadasInput } from './generales/coordenadas';

export interface ICrearClienteInput {
  nombre: string;
  admin?: boolean;
  edadMinima?: number;
  twitter?: string;
  instagram?: string;
  sirenas?: boolean;
  categorias: ICategoriaCliente[];
  coordenadas: ICoordenadasInput[][];
  superficie?: number;
  imagenes: IImagenesCliente;
  idCategoriaDefault?: string;
  configuracion?: {
    verActualizaciones?: boolean;
    categoriasDeEvento?: string[];
    tagsDeEvento?: string[];
    nombreAppMonit?: string;
  };
}

export interface IUpdateClienteInput {
  activo?: boolean;
  nombre?: string;
  admin?: boolean;
  edadMinima?: number;
  twitter?: string;
  instagram?: string;
  sirenas?: boolean;
  categorias?: ICategoriaCliente[];
  coordenadas?: ICoordenadasInput[][];
  superficie?: number;
  imagenes?: IImagenesCliente;
  idCategoriaDefault?: string;
  configuracion?: {
    verActualizaciones?: boolean;
    categoriasDeEvento?: string[];
    tagsDeEvento?: string[];
    nombreAppMonit?: string;
  };
}

export interface IResumenClientes {
  cliente: string;
  cantidadUsuarios: number;
  cantidadVecinos: number;
  cantidadAlertas: number;
  cantidadSirenas: number;
  cantidadControles: number;
}
