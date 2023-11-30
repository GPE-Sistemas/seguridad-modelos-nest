export interface ISendNotificacion {
  enviarA: "Todos" | "Vecinos" | "Localidades" | "Barrios" | string;
  idsVecinos?: string[];
  idCliente?: string;
  idsLocalidades?: string[];
  idsBarrios?: string[];

  //
  titulo?: string;
  mensaje?: string;
  data?: { [key: string]: string };
}
