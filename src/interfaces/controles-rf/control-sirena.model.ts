import { ISirena } from "../..";
import { IControl } from "./control.model";

export interface IControlSirena {
  _id: string;
  idControl: string;
  idSirena: string;

  // Virtuals
  control?: IControl;
  sirena?: ISirena;
}
