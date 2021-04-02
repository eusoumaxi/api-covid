import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Historical, HistoricalRelations} from '../models';

export class HistoricalRepository extends DefaultCrudRepository<
  Historical,
  typeof Historical.prototype._id,
  HistoricalRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Historical, dataSource);
  }
}
