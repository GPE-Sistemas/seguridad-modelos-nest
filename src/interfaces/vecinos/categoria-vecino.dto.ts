export interface ICrearCategoriaVecinoInput {
  desde?: string;
  hasta?: string;
  idCategoria?: string;
  /**
   * @deprecated se usa idConfigVecino
   */
  idVecino?: string;
  idConfigVecino?: string;
  idCliente?: string;
  idUsuario?: string;
  idsArchivosVecino?: string[];
}
