export interface ICambioTel {
  _id?: string;
  idCliente?: string;
  fecha?: string;
  idConfigVecino?: string;
  telefono?: string;
  codigo?: string;
}

type OmitirCreate = "_id";
export interface ICreateCambioTel
  extends Omit<Partial<ICambioTel>, OmitirCreate> {}

type OmitirUpdate = "_id";
export interface IUpdateCambioTel
  extends Omit<Partial<ICambioTel>, OmitirUpdate> {}
