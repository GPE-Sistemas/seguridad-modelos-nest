export type IMongoDateToStringFormat = '%Y-%m-%d' | '%V' | '%Y-%m' | '%Y';

export enum MongoDateToStringFormat {
  DIA = '%Y-%m-%d',
  SEMANA = '%V',
  MES = '%Y-%m',
  ANIO = '%Y'
}
