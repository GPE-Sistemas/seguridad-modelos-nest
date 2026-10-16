import { IBoton } from './boton';
import { TipoBoton } from './cliente';

export type TipoBloquePlantilla =
  | 'imagen'
  | 'botones'
  | 'fila'
  | 'texto'
  | 'espacio';
export type ImagenBloquePlantilla = 'arriba' | 'abajo';
/**
 * Piezas fijas de una fila. Cualquier otro valor en `items` es el `_id` de un botón de la
 * categoría (los `_id` de Mongo nunca chocan con estas palabras).
 *  - 'mas': va a la pantalla siguiente (1 → 2 → 3). 'atras': vuelve a la anterior.
 *  - 'reflector' / 'sirena': solo si el cliente tiene sirenas.
 */
export type ItemFilaEspecial = 'reflector' | 'sirena' | 'mas' | 'atras';

/**
 * Una pieza de la plantilla manual. Objeto PLANO a propósito (todos los campos opcionales, según
 * `tipo`): el nativo lo decodifica con una sola data class y un campo desconocido no rompe nada.
 */
export interface IBloquePlantilla {
  tipo: TipoBloquePlantilla;
  /**
   * Alto en dp. imagen/fila/espacio: alto del bloque. botones: alto de cada botón (vacío =
   * automático).
   */
  alto?: number;
  // imagen
  imagen?: ImagenBloquePlantilla;
  /** 'ancho' = ocupa todo el ancho (FillWidth); 'contener' = entra entera, centrada (Fit). */
  ajuste?: 'ancho' | 'contener';
  /**
   * Franja de color a todo el ancho detrás de la imagen. Vacío = sin fondo; `'tema'` =
   * color del tema del cliente; si no, un color hex.
   */
  colorFondo?: string;
  // botones
  /** Botones de la categoría que van en esta pieza, en orden. */
  idsBotones?: string[];
  columnas?: number;
  /** Ocupa el espacio libre de la pantalla (los botones se reparten en él). */
  expandir?: boolean;
  // fila
  /** En orden: `ItemFilaEspecial` o `_id` de un botón de la categoría. */
  items?: string[];
  // texto
  texto?: string;
  tamano?: number;
  color?: string;
  negrita?: boolean;
}

/** Una de las 3 pantallas de la botonera: las piezas de arriba hacia abajo. */
export interface IPantallaPlantilla {
  bloques?: IBloquePlantilla[];
}

/**
 * Plantilla armada a mano. `pantallas[0]` = la que se abre al entrar, `[1]` = la del botón "Más",
 * `[2]` = la del "Más" de la pantalla 2 (o destino de un botón Menu). Una pantalla sin piezas no
 * se muestra.
 */
export interface IPlantillaBotonera {
  version?: number;
  pantallas?: IPantallaPlantilla[];
}

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
  // Plantilla armada a mano en el admin. Solo se usa cuando `inicioTemplate === 'manual'`: el
  // nativo dibuja cada una de las 3 pantallas con sus piezas, de arriba hacia abajo.
  plantillaBotonera?: IPlantillaBotonera;
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
