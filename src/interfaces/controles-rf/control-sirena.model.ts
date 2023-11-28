import { ISirena } from "../..";
import { IControl } from "./control.model";

export interface IControlSirena {
  _id?: string;
  chipIdControl?: string;
  chipIdSirena?: string;

  // Virtuals
  control?: IControl;
  sirena?: ISirena;
}
