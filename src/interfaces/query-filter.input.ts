export interface IQueryFilterInput {
  page?: number;
  limit?: number;
  sort?: string;
  /**
   * @description
   * Representa un objeto de filtros tal cual lo recibe mongoose para la query
   * @example
   * filter = JSON.stringify({
   *   nombre: 'nombre', // => Busqueda literal
   *   fechaNacimiento: { // => Buisqueda entre 2 valores
   *    gte: '2020-01-01',
   *    lte: '2020-01-01',
   *   },
   *   $or: [ // => Busqueda OR
   *    { nombre: { $regex: 'subcadena', $options: 'i' }, // Busqueda con expresion regular
   *    { apellido: { $regex: 'subcadena', $options: 'i' } // Busqueda con expresion regular
   *   ],
   *   $and: [ // => Busqueda AND
   *     { idCliente: 'idcliente' },
   *     { fecNacimiento: { $gte: '2020-01-01', $lte: '2020-01-01' } }
   *   ]
   * });
   */
  // filter?: string;
  /**
   * @description
   * Es un array IFilter en string
   * @example
   * filter = JSON.stringify([
   *  {
   *   field: 'nombre',
   *   type: string,
   *   value: 'nombre',
   *  },
   *  {
   *   field: 'idCliente',
   *   type: objectid,
   *   value: 'idCliente',
   *  },
   * ]);
   */
  filter?: string;
  /**
   * @description
   * Representa un string u objeto para populate tal cual lo recibe mongoose para la query
   * @example
   * populate = 'cliente'
   * populate = JSON.stringify({
   *  path: 'cliente',
   *  select: 'nombre',
   * });
   */
  populate?: string;
  select?: string;
  [key: string]: any;
}

export interface IFilter {
  field: string | string[];
  type: 'number' | 'string' | 'boolean' | 'date' | 'object' | 'regex' | 'objectid';
  value: any;
}