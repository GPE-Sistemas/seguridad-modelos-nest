export interface ISendNotificacion {
  enviarA:
    | "Todos"
    | "Vecinos"
    | "Localidades"
    | "Barrios"
    | "Listas"
    | string;
  /**
   * @deprecated usar `idsConfigVecinos` (`_id` de ConfigVecino). Son ids de la colección
   * vecinos; se siguen aceptando por compatibilidad hasta la fase C.
   */
  idsVecinos?: string[];
  /** Con `enviarA: "Vecinos"`: `_id` de los ConfigVecino destinatarios. */
  idsConfigVecinos?: string[];
  idCliente?: string;
  idsLocalidades?: string[];
  idsBarrios?: string[];
  /** Con `enviarA: "Listas"`: listas de difusión destinatarias. Ver `IListaDifusion`. */
  idsListasDifusion?: string[];

  //
  titulo?: string;
  mensaje?: string;
  data?: { [key: string]: string };
}
