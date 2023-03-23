export interface IQueryParam {
  // page: es el número de página a devolver de los resultados, comenzando desde cero.
  page?: string | number;
  // limit: es la cantidad de resultados que debe devolver la consulta, cero para sin límite.
  limit?: string | number;
  // sort: es el orden en que se devolverán los datos, es el nombre de una propiedad de la entidad, ej. ‘username’ para orden ascendente o ‘-username’ para orden descendente.
  sort?: string;
  // filter: es un objeto con la misma estructura que recibe MongoDb para hacer las querys.
  filter?: string;
  // populate: es un String u objeto con la misma estructura que recibe Mongoose.
  populate?: string;
  // select: es un String que contiene separados por espacio todos los campos de la entidad que se desean obtener en la consulta, si no se proporciona se devuelve el objeto completo.
  select?: string;
  // Se deja un campo genérico para agregar cualquier otro parámetro no contemplado.
  [key: string]: any;
}

export interface IFilter {
  [key: string]: any;
}

export interface IPopulate {
  path?: string;
  select?: string;
  populate?: IPopulate;
  [key: string]: any;
}
