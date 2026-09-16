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
  requestBody: any;               // Datos de entrada con los que se armó el envío (DTO interno, NO es el body HTTP)
  responseBody?: any;             // Body de la respuesta de SOFLEX
  responseStatus?: number;        // HTTP status code real devuelto por SOFLEX

  // Crudo del request/response HTTP.
  // `requestBody` es el DTO interno previo al armado del payload, así que por sí
  // solo no permite reconstruir qué se envió: el body real lo arma
  // SoflexClientService sumando constantes del protocolo y datos de configSOFLEX.
  // Estos campos guardan el intercambio tal cual viajó, para poder auditarlo ante
  // un reclamo sin depender del código vigente.
  requestUrl?: string;                        // URL completa del endpoint invocado
  requestMetodo?: string;                     // Verbo HTTP (siempre POST hoy)
  requestHeaders?: Record<string, any>;       // Headers enviados, con credenciales redactadas
  requestBodyHttp?: any;                      // Body HTTP real enviado a SOFLEX
  responseHeaders?: Record<string, any>;      // Headers de la respuesta
  duracionMs?: number;                        // Duración del request, en milisegundos

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
