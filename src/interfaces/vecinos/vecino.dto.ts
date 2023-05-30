import { ICrearCategoriaVecinoInput } from "./categoria-vecino.dto";
import { ICoordenadasInput } from "../generales/coordenadas";
import { IEnvioCodigo } from "./envio-codigo.dto";
import { DireccionV2 } from "../..";

export interface INuevoVecino {
  nombre?: string;
  dni?: string;
  sexo?: boolean;
  fechaNacimiento?: string;
  pais?: string;
  telefono?: string;
  email?: string;
  direccion?: string;
  // Comentario proque me mershié al instante.
  direccionV2?: DireccionV2;
  complementoDireccion?: string;
  /**
   * La ubicacion solo es necesaria cuando el vecino se crea desde la app de boton por la propia persona
   */
  ubicacion?: ICoordenadasInput;
  idSmartCity?: string;
}

export interface ICrearVecino {
  nombre?: string;
  dni?: string;
  sexo?: boolean | null;
  telefono?: string;
  idCliente?: string;
  activo?: boolean;
  email?: string;
  direccion?: string;
  direccionV2?: DireccionV2;
  idLocalidad?: string;
  idBarrio?: string;
  /**
   * @deprecated Esta propiedad se reemplazó por 'DireccionV2'
   */
  ubicacionDireccion?: ICoordenadasInput;
  complementoDireccion?: string;
  pais?: string;
  fechaNacimiento?: string;
  // categoria?: ICrearCategoriaVecinoInput;
  envioCodigo?: IEnvioCodigo;
  creadoPorAdmin?: boolean;
  importado?: boolean;
  dniEscaneado?: boolean;
  idSmartCity?: string;
}

export interface IUpdateVecino {
  activo?: boolean;
  categoria?: ICrearCategoriaVecinoInput;
  envioCodigo?: IEnvioCodigo;
  direccion?: string;
  direccionV2?: DireccionV2;
  idLocalidad?: string;
  idBarrio?: string;
  /**
   * @deprecated Esta propiedad se reemplazó por 'DireccionV2'
   */
  ubicacionDireccion?: ICoordenadasInput;
  complementoDireccion?: string;
  idCliente?: string;
  ultimoAcceso?: string;
  nombre?: string;
  dni?: string;
  sexo?: boolean | null;
  fechaNacimiento?: string;
  pais?: string;
  telefono?: string;
  email?: string;
  ubicacion?: ICoordenadasInput;
  tokenPush?: string;
  idSmartCity?: string;
}

export interface IUpdateDomicilioVecino {
  direccion?: string;
  direccionV2?: DireccionV2;
  complementoDireccion?: string;
  ubicacion?: ICoordenadasInput;
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
  sexo: boolean | null;
  cantidad: number;
}

export interface IUpdateVecinoDatos {
  nombre?: string;
  dni?: string;
  sexo?: boolean | null;
  fechaNacimiento?: string;
  pais?: string;
  telefono?: string;
  email?: string;
  /**
   * @deprecated Esta propiedad se reemplazó por 'DireccionV2'
   */
  direccion?: string;
  direccionV2?: DireccionV2;
  complementoDireccion?: string;
  ubicacion?: ICoordenadasInput;
  idSmartCity?: string;
}
