export class QueryFilterInput {
  page?: number;
  limit?: number;
  sort?: string;
  /**
   * @description
   * Representa un objecto de filtros tal cual lo recibe mongoose para la query
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
  filter?: string;
  populate?: string;
  select?: string;
}
