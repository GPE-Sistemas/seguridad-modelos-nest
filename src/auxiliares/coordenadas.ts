export interface ICoordenadas {
  lat: number;
  lng: number;
}

/**
 * Tipos de geometría GeoJSON que acepta Mongo.
 * https://www.mongodb.com/docs/manual/reference/geojson/
 */
export type GeoJSONType =
  | 'Point'
  | 'LineString'
  | 'Polygon'
  | 'MultiPoint'
  | 'MultiLineString'
  | 'MultiPolygon'
  | 'GeometryCollection';
