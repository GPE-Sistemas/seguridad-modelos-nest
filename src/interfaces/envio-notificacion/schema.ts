import { IBarrio } from '../barrio';
import { ICliente } from '../cliente';
import { IListaDifusion } from '../lista-difusion';
import { ILocalidad } from '../localidades/schema';
import { IUsuario } from '../usuario';

/**
 * Registro de un envío de notificaciones: **una fila por disparo**, no por destinatario.
 *
 * Qué se mandó, quién lo mandó y a quiénes. Lo llena `POST /notificaciones/send` de
 * monitoreo-nest, que es el único embudo de los envíos manuales.
 *
 * ## Por qué no alcanzaba lo que ya existía
 *
 * - `INotificacion` es la **bandeja del vecino**: una fila por destinatario, sin `idUsuario` ni
 *   el criterio usado. Además la lee la app del vecino, así que no es lugar para la identidad
 *   del operador. Es la razón de que la pantalla de Mensajes Push muestre hoy una fila repetida
 *   por cada vecino alcanzado.
 * - `IAuditoria` sí registra quién (el interceptor de la API de datos audita cada POST con el
 *   `idUsuario` del header), pero deja **una auditoría por destinatario** y nunca ve el
 *   criterio: para cuando llega ahí, el envío ya se resolvió a un `idVecino` concreto.
 */
export interface IEnvioNotificacion {
  _id?: string;
  idCliente?: string;

  fecha?: string;

  /** Quién lo mandó. Los envíos manuales siempre salen de un usuario de monitoreo. */
  idUsuario?: string;

  titulo?: string;
  mensaje?: string;

  // ─── A quiénes ────────────────────────────────────────────────────────────────

  /** Espeja `ISendNotificacion.enviarA`. */
  enviarA?: 'Todos' | 'Vecinos' | 'Localidades' | 'Barrios' | 'Listas' | string;

  idsListasDifusion?: string[];
  idsLocalidades?: string[];
  idsBarrios?: string[];
  /** Ids de vecino (no de configvecino), igual que `ISendNotificacion.idsVecinos`. */
  idsVecinos?: string[];

  /**
   * A cuántos vecinos se resolvió el criterio **en el momento del envío**.
   *
   * Es un snapshot, no una garantía de entrega: no dice cuántos tenían `tokenPush` ni cuántos
   * aceptó FCM. Guardarlo igual importa porque los criterios geográficos cambian con el tiempo
   * — la misma lista, dentro de un mes, resuelve a otra gente.
   */
  cantidadDestinatarios?: number;

  // ─── Virtuals ─────────────────────────────────────────────────────────────────

  cliente?: ICliente;
  usuario?: IUsuario;
  listasDifusion?: IListaDifusion[];
  localidades?: ILocalidad[];
  barrios?: IBarrio[];
}

type OmitirCreate =
  | '_id'
  | 'cliente'
  | 'usuario'
  | 'listasDifusion'
  | 'localidades'
  | 'barrios';

export interface ICreateEnvioNotificacion
  extends Omit<Partial<IEnvioNotificacion>, OmitirCreate> {}
