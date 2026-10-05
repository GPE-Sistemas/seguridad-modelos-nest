/**
 * @deprecated La colección `vecinos` está deprecada: la identidad del vecino es `IConfigVecino`
 * (una config por persona y cliente). No crear ni actualizar vecinos; leer de
 * `configVecino.datosPersonales`. La FK `idVecino` sobrevive solo por compatibilidad
 * (tokens legacy y datos históricos).
 *
 * Mapeo campo a campo hacia `IConfigVecino`:
 * - `_id`             → `IConfigVecino._id` (identidad en tokens nuevos); en datos viejos
 *                       queda como `IConfigVecino.idVecino` (FK legacy, solo compat)
 * - `nombre`          → `datosPersonales.nombre`
 * - `dni`             → `datosPersonales.dni`
 * - `sexo`            → `datosPersonales.sexo`
 * - `email`           → `datosPersonales.email`
 * - `pais`            → `datosPersonales.pais`
 * - `telefono`        → `datosPersonales.telefono`
 * - `fechaNacimiento` → `datosPersonales.fechaNacimiento`
 * - `idsCliente`      → sin equivalente: cada cliente tiene su propia config
 *                       (`IConfigVecino.idCliente`); las configs "hermanas" de una persona se
 *                       buscan por `datosPersonales.telefono` (+ `datosPersonales.dni`)
 * - `activo`          → `IConfigVecino.activo`
 * - `fechaCreacion`   → `IConfigVecino.fechaCreacion`
 * - `creadoPorAdmin`  → `IConfigVecino.creadoPorAdmin`
 * - `importado`       → `IConfigVecino.importado`
 * - `dniEscaneado`    → `IConfigVecino.dniEscaneado`
 */
export interface IVecino {
  _id?: string;
  // IVECINO DE VERDAD
  nombre?: string;
  dni?: string;
  sexo?: boolean | null;
  email?: string;
  pais?: string;
  telefono?: string;
  fechaNacimiento?: string;
  idsCliente?: string[];
  // Quizás
  activo?: boolean;
  fechaCreacion?: string;
  creadoPorAdmin?: boolean;
  importado?: boolean;
  dniEscaneado?: boolean;
}

type OmitirCreate = '_id';

/**
 * @deprecated usar `ICreateConfigVecino` (la colección vecinos no se escribe más).
 */
export interface ICrearVecino extends Omit<Partial<IVecino>, OmitirCreate> {}

type OmitirUpdate = '_id';

/**
 * @deprecated usar `IUpdateConfigVecino` (la colección vecinos no se escribe más).
 */
export interface IUpdateVecino extends Omit<Partial<IVecino>, OmitirUpdate> {}

/**
 * Re-export por compatibilidad: `GeoJSONType` vive ahora en `auxiliares/coordenadas`.
 * Importarlo desde ahí (o desde la raíz de `modelos/src`).
 */
export type { GeoJSONType } from '../../auxiliares/coordenadas';
