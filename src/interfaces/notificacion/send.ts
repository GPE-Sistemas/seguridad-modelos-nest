export interface ISendNotificacion {
  enviarA:
    | "Todos"
    | "Vecinos"
    | "Localidades"
    | "Barrios"
    | "Listas"
    | string;
  idsVecinos?: string[];
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
