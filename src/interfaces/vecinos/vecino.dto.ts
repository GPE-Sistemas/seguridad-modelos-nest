import { ICrearCategoriaVecinoInput } from "./categoria-vecino.dto";
import { ICoordenadasInput } from "../generales/coordenadas";
import { IEnvioCodigo } from "./envio-codigo.dto";

export interface INuevoVecino {
  nombre: string;
  dni: string;
  sexo: boolean;
  fechaNacimiento: string;
  pais: string;
  telefono: string;
  email: string;
  direccion: string;
  complementoDireccion?: string;
  /**
   * La ubicacion solo es necesaria cuando el vecino se crea desde la app de boton por la propia persona
   */
  ubicacion?: ICoordenadasInput;
}

export interface ICrearVecino {
  nombre: string;
  dni: string;
  sexo: boolean;
  telefono: string;
  idCliente: string;
  activo?: boolean;
  email?: string;
  direccion: string;
  complementoDireccion?: string;
  pais?: string;
  fechaNacimiento?: string;
  categoria?: ICrearCategoriaVecinoInput;
  envioCodigo?: IEnvioCodigo;
  idCategoriaDefault: string;
  creadoPorAdmin: boolean;
}

export interface IUpdateVecino {
  activo?: boolean;
  categoria?: ICrearCategoriaVecinoInput;
  envioCodigo?: IEnvioCodigo;
  direccion?: string;
  complementoDireccion?: string;
  idCliente?: string;
}

export interface IUpdateDomicilioVecino {
  direccion: string;
  complementoDireccion?: string;
  ubicacion: ICoordenadasInput;
}

// Resumen

export interface IResumenVecinosPorCliente {
  cliente: string;
  cantidad: number;
}

export interface IResumenVecinosPorCategoria {
  categoria: string;
  cantidad: number;
}

export interface IResumenVecinosPorSexo {
  sexo: boolean;
  cantidad: number;
}
