export interface Version {
  nombre: string;
  version: string;
  servicios: Servicio[];
}

export interface Servicio {
  nombre: string;
  version: string;
}
