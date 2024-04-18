export interface ICrearBaneoVecino {
  desde?: string;
  hasta: string;
  /**
   * @deprecated se usa idConfigVecino
   */
  idVecino?: string;
  idConfigVecino?: string;
  idCliente?: string;
  tipo: string; // 'sirenas' | 'control' | 'alertas'
  idUsuario?: string;
}
