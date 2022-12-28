export interface IVersion {
  nombre: string;
  version: string;
  servicios: IServicio[];
}

export interface IServicio {
  nombre: string;
  version: string;
}
