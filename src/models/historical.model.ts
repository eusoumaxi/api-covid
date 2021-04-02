import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Historical extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  _id: string;

  @property({
    type: 'string',
    required: true,
  })
  CountryRegion: string;

  @property({
    type: 'string',
    required: true,
  })
  CountryCode: string;

  @property({
    type: 'string',
    required: true,
  })
  CountrySlug: string;

  @property({
    type: 'number',
    required: true,
  })
  CountryLat: number;

  @property({
    type: 'number',
    required: true,
  })
  CountryLong: number;

  @property({
    type: 'string',
    required: true,
  })
  CountryTimeline: string;

  @property({
    type: 'string',
    required: true,
  })
  Province: string;

  @property({
    type: 'string',
    required: true,
  })
  ProvinceSlug: string;

  @property({
    type: 'string',
    required: true,
  })
  City: string;

  @property({
    type: 'string',
    required: true,
  })
  CitySlug: string;

  @property({
    type: 'string',
    required: true,
  })
  CityTimeline: string;

  @property({
    type: 'number',
    required: true,
  })
  Lat: number;

  @property({
    type: 'number',
    required: true,
  })
  Long: number;

  @property({
    type: 'number',
    required: true,
  })
  Deaths: number;

  @property({
    type: 'number',
    required: true,
  })
  Confirmed: number;

  @property({
    type: 'number',
    required: true,
  })
  Recovered: number;

  @property({
    type: 'number',
    required: true,
  })
  Active: number;

  @property({
    type: 'date',
    required: true,
  })
  LastUpdate: string;

  @property({
    type: 'string',
    required: true,
  })
  CombinedKey: string;

  @property({
    type: 'string',
    required: true,
  })
  Source: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Historical>) {
    super(data);
  }
}

export interface HistoricalRelations {
  // describe navigational properties here
}

export type HistoricalWithRelations = Historical & HistoricalRelations;
