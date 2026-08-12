import { ICoordenadas } from '../../auxiliares/coordenadas';
import { IBarrio } from '../barrio';
import { ICliente } from '../cliente';
import { IConfigVecino } from '../config-vecino';
import { ILocalidad } from '../localidades/schema';

/**
 * Lista de difusión: destinatarios de notificaciones, definidos por **criterios** que se
 * resuelven en el momento del envío.
 *
 * ## Por qué no es un `IGrupo`
 *
 * Pertenecer a un `IGrupo` cambia el comportamiento de las alertas de pánico:
 *
 * - `IAlerta.idGrupo` se llena con el grupo del vecino al crear la alerta, y los miembros del
 *   grupo ven las alertas de los demás (autogestión / barrio cerrado).
 * - Con un botón `requierePreAprobacion`, las alertas de un miembro no-administrador quedan en
 *   `Pre Aprobada` hasta que un administrador las apruebe. Sin administradores quedan
 *   retenidas y monitoreo nunca las ve.
 * - `IConfigVecino.idGrupo` es uno solo: sumar a alguien a otro grupo lo saca del anterior.
 * - Los grupos geográficos no pueden solaparse entre sí.
 *
 * Una lista no tiene ninguno de esos efectos: no toca alertas, no tiene administradores, un
 * vecino puede estar en varias y dos listas pueden cubrir la misma zona.
 *
 * ## Criterios (se combinan con OR)
 *
 * Los presentes se suman: una lista puede ser "estos tres barrios **más** este polígono
 * **más** estos vecinos elegidos a mano". Todos se resuelven contra `configvecinos`:
 *
 * | Criterio | Se resuelve con |
 * |---|---|
 * | [idsConfigVecinos] | `_id: { $in }` |
 * | [idsLocalidades] | `direccion.idLocalidad: { $in }` |
 * | [idsBarrios] | `direccion.idBarrio: { $in }` |
 * | [geojson] | `$geoWithin` sobre `direccion.geojson` |
 *
 * Los tres primeros no necesitan consulta geográfica: el configvecino ya tiene barrio y
 * localidad resueltos. El polígono propio es para zonas que no coinciden con ninguna división
 * existente.
 *
 * ## Membresía dinámica, a propósito
 *
 * No se materializa la membresía en el configvecino. Si se guardara, un vecino nuevo dentro
 * del polígono no recibiría hasta que alguien recalcule, y uno que se mudó seguiría
 * recibiendo. Resolver al enviar mantiene la lista siempre al día; el costo es una query por
 * envío, que es lo mismo que ya hacen los envíos por Localidades y Barrios.
 */
export interface IListaDifusion {
  _id?: string;
  idCliente?: string;

  nombre?: string;
  descripcion?: string;

  /** Una lista inactiva no se ofrece al enviar, pero conserva sus criterios. */
  activa?: boolean;
  fechaCreacion?: string;

  // ─── Criterios ────────────────────────────────────────────────────────────────

  /** Vecinos elegidos a mano, por `_id` de configvecino. */
  idsConfigVecinos?: string[];

  idsLocalidades?: string[];
  idsBarrios?: string[];

  /**
   * Polígono propio dibujado en el mapa, para zonas que no coinciden con ninguna localidad ni
   * barrio. Misma forma que `IZona` / `IGrupo`, así el editor de polígonos del front sirve tal
   * cual: `coordenadas` es lo que edita la UI y `geojson` lo que consulta Mongo.
   *
   * A diferencia de los grupos geográficos, **puede solaparse** con otras listas y con
   * cualquier otra superficie: un vecino alcanzado por dos listas recibe una sola
   * notificación, porque el envío deduplica por configvecino.
   */
  coordenadas?: ICoordenadas[];
  geojson?: {
    type: 'Polygon';
    coordinates: [number, number][][];
  };

  /**
   * Excluidos explícitos, por `_id` de configvecino. Se aplican **después** de los criterios:
   * sirven para "todo el barrio menos estos".
   */
  idsConfigVecinosExcluidos?: string[];

  // ─── Virtuals ─────────────────────────────────────────────────────────────────

  cliente?: ICliente;
  localidades?: ILocalidad[];
  barrios?: IBarrio[];
  configVecinos?: IConfigVecino[];
}

type OmitirCreate =
  | '_id'
  | 'cliente'
  | 'localidades'
  | 'barrios'
  | 'configVecinos'
  | 'fechaCreacion';

export interface ICreateListaDifusion
  extends Omit<Partial<IListaDifusion>, OmitirCreate> {}

type OmitirUpdate = OmitirCreate | 'idCliente';

export interface IUpdateListaDifusion
  extends Omit<Partial<IListaDifusion>, OmitirUpdate> {}
