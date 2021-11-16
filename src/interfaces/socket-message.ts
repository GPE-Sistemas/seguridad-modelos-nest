export interface ISocketMessage {
  /**
   * Las entidades modificadas (clientes, usuarios, etc)
   */
  paths?: string[];
  /**
   * Metodo HTTP ejecutado (post, put, delete)
   */
  method?: string;
  /**
   * El id del usuario que ejecutó la accion
   */
  idUser?: string;
  /**
   * El body que se devolvio al usuario
   * En caso de post o put, el body es el nuevo objeto
   * En caso de delete, el body es un objeto { _id: "id del objeto eliminado" }
   */
  body?: Record<string, any>;
}
