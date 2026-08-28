import { IUpdateCliente } from '../cliente';

/**
 * Contratos para **consultar el uso de una categoría y reemplazarla** antes de sacarla de
 * circulación (borrarla, o quitarla de un cliente).
 *
 * ## Por qué hace falta un reemplazo POR CLIENTE
 *
 * `ICategoria` es global: no tiene `idCliente`. Un cliente la usa enlazándola desde
 * `ICliente.categorias[]`, así que **la misma categoría puede estar en uso por varios clientes
 * a la vez**. Cuando se la quiere dar de baja, cada cliente necesita su propia categoría de
 * reemplazo, porque la de reemplazo tiene que ser una de las que ESE cliente ya tiene
 * asignadas — no hay una respuesta única para todos.
 *
 * De ahí que {@link IEliminarCategoriaInput} lleve una lista `{ idCliente, reemplazo }` y no un
 * solo id.
 *
 * ## Qué se reasigna y qué no
 *
 * Se reasigna la asignación **vigente** del vecino (`IConfigVecino.categoria`) y se actualizan
 * las referencias del cliente (`categorias[]`, `idCategoriaDefault`, `categoriasDefault[]`) y
 * las `IConfiguracionLocalidadCategoria`.
 *
 * NO se tocan los registros históricos, que deben seguir apuntando a la categoría que
 * efectivamente estuvo vigente en su momento:
 *
 * - `ICategoriaVecino` (historial de asignaciones): además se le **agrega** una fila por cada
 *   vecino reasignado, para dejar asentado quién hizo el cambio y cuándo.
 * - `IAlerta.idCategoria` y `IRegistro.categoria.idCategoria`.
 *
 * ## Estados de vigencia
 *
 * Los tres consumidores de runtime aplican la misma regla:
 *
 * ```ts
 * vigente <=> config.categoria.categoria && config.categoria.hasta && ahora < hasta
 * ```
 *
 * Es decir que una asignación **sin `hasta` nunca se aplica**: el vecino usa la
 * `categoriaDefault` del cliente igual que si estuviera vencida. Por eso sólo
 * {@link EstadoCategoriaVecino.vigente} exige reemplazo; los otros dos estados se limpian
 * (`categoria` pasa a vacío) sin preguntar, porque el comportamiento visible no cambia.
 */

/**
 * Estado de la categoría asignada a un vecino en `IConfigVecino.categoria`.
 *
 * - `vigente`: `hasta` presente y futuro. Es la única que se aplica en runtime, y la única que
 *   exige elegir un reemplazo.
 * - `vencida`: `hasta` presente y pasado. El vecino ya está usando la default del cliente.
 * - `sinVencimiento`: `hasta` ausente (o no convertible a fecha). Tampoco se aplica en runtime,
 *   pero la referencia existe en el documento y hay que limpiarla para no dejar huérfanos.
 */
export type EstadoCategoriaVecino = 'vigente' | 'vencida' | 'sinVencimiento';

/** Categoría ofrecible como reemplazo, con lo mínimo para mostrarla en un `select`. */
export interface IOpcionReemplazo {
  idCategoria: string;
  nombre?: string;
  variante?: string;
}

/** Conteo de vecinos de un cliente, abierto por estado de vigencia. */
export interface IVecinosPorEstado {
  /** Exigen reemplazo. */
  vigentes: number;
  /** Se limpian. */
  vencidos: number;
  /** Se limpian. */
  sinVencimiento: number;
}

/** Uso de UNA categoría dentro de UN cliente. */
export interface IUsoCategoriaPorCliente {
  idCliente: string;
  nombreCliente?: string;
  /** La categoría figura en `ICliente.categorias[]` de este cliente. */
  asignadaAlCliente: boolean;
  vecinos: IVecinosPorEstado;
  /** Es la `ICliente.idCategoriaDefault` de este cliente. */
  esDefault: boolean;
  /** Cuántos rangos de `ICliente.categoriasDefault[]` (por edad) la referencian. */
  rangosPorEdad: number;
  /** Cuántas `IConfiguracionLocalidadCategoria` activas de este cliente la referencian. */
  localidades: number;
  /**
   * Categorías de ESTE cliente que pueden reemplazarla. Excluye la categoría en cuestión.
   * Vacío significa que el cliente no tiene alternativa: hay que asignarle otra antes de poder
   * dar de baja ésta.
   */
  reemplazosPosibles: IOpcionReemplazo[];
}

/**
 * Respuesta de `GET /categorias/:id/uso`. Alimenta el diálogo de borrado: una fila por cliente,
 * cada una con su propio `select` de reemplazo.
 */
export interface IUsoCategoria {
  idCategoria: string;
  nombre?: string;
  variante?: string;
  /** No la usa ningún cliente ni ningún vecino: se puede borrar sin reemplazos. */
  sinUso: boolean;
  /** Suma de `vecinos.vigentes` de todos los clientes. */
  totalVecinosVigentes: number;
  clientes: IUsoCategoriaPorCliente[];
}

/** Uso de UNA categoría del cliente que se está editando. */
export interface IUsoCategoriaEnCliente {
  idCategoria: string;
  nombre?: string;
  variante?: string;
  vecinos: IVecinosPorEstado;
  esDefault: boolean;
  rangosPorEdad: number;
  localidades: number;
}

/**
 * Respuesta de `GET /clientes/:id/uso-categorias`. Una sola llamada devuelve el uso de TODAS las
 * categorías del cliente, para mostrar el contador al lado de cada una en la pestaña Categorías
 * y para armar el diálogo de "quitar" sin pedir un request por categoría.
 */
export interface IUsoCategoriasCliente {
  idCliente: string;
  /** Total de `IConfigVecino` del cliente, tengan o no categoría. */
  totalVecinos: number;
  categorias: IUsoCategoriaEnCliente[];
}

/**
 * Reemplazo elegido para los vecinos de UN cliente, al **borrar** una categoría.
 *
 * `idCategoriaReemplazo` en `null` es una opción válida y explícita: los vecinos quedan sin
 * categoría y pasan a usar la `categoriaDefault` del cliente.
 */
export interface IReemplazoCategoria {
  idCliente: string;
  idCategoriaReemplazo: string | null;
}

/**
 * Body de `POST /categorias/:id/eliminar`.
 *
 * Va por POST y no por `DELETE` con body porque `AxiosService.DELETE` necesitaría `{ data }` y
 * hay proxies que descartan el cuerpo de un DELETE.
 *
 * `reemplazos` debe cubrir **todos** los clientes que {@link IUsoCategoria} reporte con uso. Si
 * falta alguno, o si un `idCategoriaReemplazo` no pertenece a `cliente.categorias[]` de su
 * propio cliente, la operación se rechaza entera.
 */
export interface IEliminarCategoriaInput {
  reemplazos: IReemplazoCategoria[];
}

/**
 * Reemplazo elegido al **quitar** una categoría de un cliente (sin borrarla: la categoría sigue
 * existiendo y otros clientes la pueden seguir usando).
 *
 * A diferencia de {@link IReemplazoCategoria}, acá el cliente ya está fijado por la ruta, y lo
 * que varía es qué categoría se saca.
 */
export interface IReemplazoCategoriaCliente {
  /** La categoría que se saca de `cliente.categorias[]`. */
  idCategoria: string;
  /** `null` = los vecinos pasan a usar la `categoriaDefault` del cliente. */
  idCategoriaReemplazo: string | null;
}

/**
 * Body de `PUT /clientes/:id` cuando el update saca categorías del cliente.
 *
 * `reemplazosCategorias` NO se persiste: es una instrucción para el propio update. El backend
 * diffea `cliente.categorias[]` contra lo que hay en base, exige un reemplazo por cada categoría
 * quitada que tenga vecinos vigentes, reasigna, y recién entonces guarda el cliente.
 *
 * Cada `idCategoriaReemplazo` tiene que pertenecer al array `categorias` **nuevo** (el que viene
 * en este mismo body), no al viejo: si no, el reemplazo quedaría apuntando a una categoría que
 * el cliente tampoco va a tener.
 */
export interface IUpdateClienteConReemplazos extends IUpdateCliente {
  reemplazosCategorias?: IReemplazoCategoriaCliente[];
}

/**
 * Body de `PUT /configvecinos/reasignar-categoria` (API de datos).
 *
 * Endpoint propio en vez del `updateMany` genérico, porque ése hace `{ $set: dato }` con el
 * objeto entero y pisaría `desde`, `hasta` e `idsArchivosVecino`. Acá el `$set` es de claves
 * anidadas puntuales, así que el vencimiento del vecino se conserva.
 */
export interface IReasignarCategoriaInput {
  idCliente: string;
  /** Categoría que se está sacando de circulación. */
  idCategoriaVieja: string;
  /**
   * Categoría destino. En `null` se hace `$unset` de `configVecino.categoria` completo, y el
   * vecino pasa a la `categoriaDefault` del cliente.
   */
  idCategoriaNueva: string | null;
  /** Queda en `categoria.idUsuario`: deja registrado quién ejecutó la reasignación. */
  idUsuario: string;
  /**
   * `true`  → sólo las asignaciones vigentes (`hasta` futuro): es la reasignación propiamente
   *           dicha, y preserva `desde` / `hasta`.
   * `false` → las vencidas y las que no tienen `hasta`: es la limpieza, y va siempre con
   *           `idCategoriaNueva: null`.
   */
  soloVigentes: boolean;
}

/** Resultado de {@link IReasignarCategoriaInput}, para poder verificar que no faltó ninguno. */
export interface IResultadoReasignacion {
  /** Documentos que matchearon el filtro. */
  coincidencias: number;
  /** Documentos efectivamente modificados. */
  modificados: number;
}

/**
 * Un motivo concreto por el que una categoría no se puede dar de baja todavía. El front lo usa
 * para armar el diálogo de reemplazo directamente desde el error, sin volver a consultar.
 */
export interface IConflictoReemplazoCategoria {
  idCategoria: string;
  nombre?: string;
  variante?: string;
  idCliente: string;
  nombreCliente?: string;
  vecinosVigentes: number;
  reemplazosPosibles: IOpcionReemplazo[];
}

/**
 * Cuerpo del `409 Conflict` que devuelven tanto `POST /categorias/:id/eliminar` como
 * `PUT /clientes/:id`, cuando falta resolver algún reemplazo.
 */
export interface IErrorCategoriaEnUso {
  mensaje: string;
  conflictos: IConflictoReemplazoCategoria[];
  /**
   * `true` cuando el problema es que el cliente se quedaría sin ninguna categoría: en ese caso
   * no alcanza con elegir un reemplazo, hay que asignarle otra categoría antes.
   *
   * Importa porque un cliente sin categorías rompe el botón: `getCategoria()` de
   * `seguridad-boton-nest` agota sus tres fallbacks y tira `NotAcceptableException`, así que los
   * vecinos de ese cliente no pueden emitir alertas.
   */
  clienteQuedariaSinCategorias?: boolean;
}
