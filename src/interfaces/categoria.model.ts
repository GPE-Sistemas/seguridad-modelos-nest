import { IBoton } from './boton.model';

export interface ICategoria {
  _id: string;
  nombre: string;
  prioridad: number;
  color: string;
  idBtnPrincipal: string;
  idsBtnsSecundarios: string[];
  // Virtuals
  btnPrincipal?: IBoton;
  btnsSecundarios?: IBoton[];
}
