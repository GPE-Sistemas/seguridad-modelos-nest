import { IBoton, ICentroMonitoreo, ICliente } from '..';

export type Rol =
  | 'admin'
  | 'operador'
  | 'Operador (Sin Mensajes)'
  | 'Crear Controles'
  | 'veedor'
  | 'Enviar Notificaciones'
  | 'Administrador de sirenas'
  | 'Administrador de porticos'
  | 'Eliminar Vecinos';

export const ROLES: Rol[] = [
  'admin',
  'operador',
  'Operador (Sin Mensajes)',
  'Crear Controles',
  'veedor',
  'Enviar Notificaciones',
  'Administrador de sirenas',
  'Administrador de porticos',
  'Eliminar Vecinos',
];

export interface IConfigUsuario {
  // Config del dashboard
  dashboard?: {
    // Resúmenes (sección superior de tarjetas de estadísticas)
    resumenVecinos?: boolean;
    resumenUsuarios?: boolean;
    resumenAlertas?: boolean;
    resumenSirenas?: boolean;
    resumenTelemedicina?: boolean;
    // Mapa de calor
    mapaDeCalor?: boolean;
    /// Gráficos individuales
    /// Uso el título del gráfico porque no hay otra manera de relacionarlos.
    ///Top uso de sirenas
    topUsoSirenas?: boolean;
    /// Top envio de alertas
    topEnvioAlertas?: boolean;
    /// Vecinos Activos
    vecinosActivos?: boolean;
    // Alertas Por Dia
    alertasPorDia?: boolean;
    // Alertas por localidad
    alertasPorLocalidad?: boolean;
    // Alertas por tipo
    alertasPorTipo?: boolean;
    // Eventos por categoria
    eventosPorCategoria?: boolean;
    // Eventos por subcategoria
    eventosPorSubcategoria?: boolean;
    // Eventos de sirena
    eventosDeSirena?: boolean;
    // Eventos de reflector
    eventosDeReflector?: boolean;
    // Telemedicina
    telemedicina?: boolean;
  };
}

export interface IOperador {
  idCentroMonitoreo: string;
  idsBotones: string[];
  // Virtuals
  centroMonitoreo?: ICentroMonitoreo;
  botones?: IBoton[];
}

export interface IUsuario {
  _id?: string;
  activo?: boolean;
  fechaCreacion?: string;
  nombre?: string;
  dni?: string;
  sexo?: boolean;
  idCliente?: string;
  email?: string;
  direccion?: string;
  pais?: string;
  telefono?: string;
  fechaNacimiento?: string;
  roles?: Rol[];
  usuario?: string;
  clave?: string;
  operador?: IOperador;
  sirenasOnline?: boolean;
  config?: IConfigUsuario;
  // Virtuals
  cliente?: ICliente;
}

export interface IResumenUsuariosPorCliente {
  cliente: string;
  cantidad: number;
}

type OmitirCreate = '_id';
export interface ICreateUsuario extends Omit<Partial<IUsuario>, OmitirCreate> {}

type OmitirUpdate = '_id';
export interface IUpdateUsuario extends Omit<Partial<IUsuario>, OmitirUpdate> {}
