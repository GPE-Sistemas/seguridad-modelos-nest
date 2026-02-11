interface ConfiguracionPais {
  codigo: string;
  codigoPais: string;
  timezone: string;
  locale: string;
  coordenadasDefault: {
    lat: number;
    lng: number;
  };
  validaciones: {
    telefono: string;
    dni: string;
  };
  estructuraAdministrativa: {
    nivel1: string;
    nivel2: string;
    nivel3: string;
  };
}

declare const configuraciones: {
  AR: ConfiguracionPais;
  PE: ConfiguracionPais;
  MX: ConfiguracionPais;
};

export default configuraciones;
