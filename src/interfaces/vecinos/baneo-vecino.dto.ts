export interface ICrearBaneoVecino {
  desde?: string;
  hasta: string;
  idVecino: string;
  idCliente?: string;
  tipo: string; // 'sirenas' | 'control' | 'alertas'
}
