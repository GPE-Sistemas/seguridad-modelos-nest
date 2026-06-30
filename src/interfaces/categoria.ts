import { IBoton } from './boton';
import { TipoBoton } from './cliente';

export interface ICategoria {
  _id?: string;
  nombre?: string;
  variante?: string;
  prioridad?: number;
  color?: string;
  editable?: boolean;
  idsBtnsPrincipales?: string[];
  idsBtnsSecundarios?: string[];
  idsOtrosBotones?: string[];
  twitter?: boolean;
  tercerBoton?: boolean;
  nombreTemplate?: string;
  // Plantilla de botonera del botón nativo (`seguridad-boton-nativo`), POR categoría: identifica la
  // familia de layout que rutea `InicioDispatcher` (genéricas 'grid'|'banner'|'centrado'|'hub' o
  // hand-made 'quilmes'|'hurlingham'|...). Campo nuevo y aditivo. Resolución en el nativo:
  // `categoria.inicioTemplate` > `cliente.inicioTemplate` > fallback. NO confundir con `nombreTemplate`
  // (legacy del botón web viejo / variante dentro de la familia). Ver contrato en seguridad-boton-docs.
  inicioTemplate?: string;
  idBotonAlertaControl?: string;
  /// Config Botones del Llavero---Control con tres botones
  boton1?: TipoBoton;
  boton2?: TipoBoton;
  boton3?: TipoBoton;
  // Virtuals
  btnsPrincipales?: IBoton[];
  btnsSecundarios?: IBoton[];
  otrosBotones?: IBoton[];
  botonAlertaControl?: IBoton;
}

type OmitirCreate =
  | '_id'
  | 'btnsPrincipales'
  | 'btnsSecundarios'
  | 'otrosBotones'
  | 'botonAlertaControl';
export interface ICreateCategoria
  extends Omit<Partial<ICategoria>, OmitirCreate> {}

type OmitirUpdate =
  | '_id'
  | 'btnsPrincipales'
  | 'btnsSecundarios'
  | 'otrosBotones'
  | 'botonAlertaControl';
export interface IUpdateCategoria
  extends Omit<Partial<ICategoria>, OmitirUpdate> {}
