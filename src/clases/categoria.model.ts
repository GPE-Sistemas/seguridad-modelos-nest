import { Boton } from './boton.model';

export class Categoria {
  _id: string;
  nombre: string;
  prioridad: number;
  color: string;
  idBtnPrincipal: string;
  idsBtnsSecundarios: string[];
  // Virtuals
  btnPrincipal?: Boton;
  btnsSecundarios?: Boton[];
}
