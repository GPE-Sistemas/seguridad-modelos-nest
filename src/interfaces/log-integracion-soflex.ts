/**
 * Tipos de operaciones que se integran con SOFLEX
 */
export type TipoOperacionSoflex = 'alta_vecino' | 'alerta';

/**
 * Estados posibles de un envío a SOFLEX
 */
export type EstadoEnvioSoflex =
  | 'pendiente'           // Creado pero no enviado aún
  | 'enviando'            // En proceso de envío
  | 'exitoso'             // Enviado exitosamente
  | 'error'               // Error en el envío (se reintentará)
  | 'error_maximo_reintentos'; // Error después de agotar reintentos

/**
 * Log de integración con SOFLEX
 * Registra todos los intentos de envío de datos a SOFLEX
 * tanto para altas de vecinos como para alertas
 */
export interface ILogIntegracionSoflex {
  _id?: string;

  // Referencias
  idCliente: string;              // Cliente que tiene configurada la integración
  idConfigVecino?: string;        // ID del vecino (para altas y alertas)
  idAlerta?: string;              // ID de la alerta (solo para alertas)

  // Operación
  tipoOperacion: TipoOperacionSoflex;
  metodoAPI: 'sendGenericPanicFleet' | 'sendPositions';

  // Estado
  estado: EstadoEnvioSoflex;
  intentos: number;               // Cantidad de intentos realizados

  // Datos enviados y respuesta
  requestBody: any;               // Payload enviado a SOFLEX
  responseBody?: any;             // Respuesta de SOFLEX
  responseStatus?: number;        // HTTP status code

  // Errores
  mensajeError?: string;          // Mensaje de error si falló
  stackTrace?: string;            // Stack trace completo del error

  // Fechas
  fechaCreacion: string;          // Fecha de creación del log (ISO 8601)
  fechaUltimoIntento?: string;    // Fecha del último intento (ISO 8601)
  fechaExito?: string;            // Fecha de envío exitoso (ISO 8601)
}

type OmitirCreate = '_id';
export interface ICreateLogIntegracionSoflex extends Omit<Partial<ILogIntegracionSoflex>, OmitirCreate> {}

type OmitirUpdate = '_id' | 'idCliente' | 'idConfigVecino' | 'idAlerta' | 'tipoOperacion' | 'fechaCreacion';
export interface IUpdateLogIntegracionSoflex extends Omit<Partial<ILogIntegracionSoflex>, OmitirUpdate> {}
