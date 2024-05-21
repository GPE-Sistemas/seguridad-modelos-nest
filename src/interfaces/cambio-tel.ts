export interface ICambioTel {
  _id?: string;
  idConfigVecino?: string;
  telefono?: string;
  codigo?: string;
}

type OmitirCreate = "_id" | "vecinos" | "visitantes";
export interface ICreateCambioTel
  extends Omit<Partial<ICambioTel>, OmitirCreate> {}

type OmitirUpdate = "_id" | "vecinos" | "visitantes";
export interface IUpdateCambioTel
  extends Omit<Partial<ICambioTel>, OmitirUpdate> {}
