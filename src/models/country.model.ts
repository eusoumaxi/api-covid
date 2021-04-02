import {Entity, model, property} from '@loopback/repository';

@model()
class City extends Entity {
  @property({
    type: 'number',
  })
  Lat: number;

  @property({
    type: 'number',
  })
  Long: number;

  @property({
    type: 'number',
  })
  Confirmed: number;

  @property({
    type: 'number',
  })
  Deaths: number;

  @property({
    type: 'number',
  })
  Recovered: number;

  @property({
    type: 'number',
  })
  Active: number;

  @property({
    type: 'number',
  })
  NewConfirmed: number;

  @property({
    type: 'number',
  })
  NewDeaths: number;

  @property({
    type: 'number',
  })
  NewRecovered: number;

  @property({
    type: 'number',
  })
  NewActive: number;

  @property({
    type: 'number',
  })
  YesterdayConfirmed: number;

  @property({
    type: 'number',
  })
  YesterdayDeaths: number;

  @property({
    type: 'number',
  })
  YesterdayRecovered: number;

  @property({
    type: 'number',
  })
  YesterdayActive: number;

  @property({
    type: 'string',
  })
  Source: string;

  @property({
    type: 'string',
  })
  CountryCode: string;

  @property({
    type: 'string',
  })
  CountrySlug: string;

  @property({
    type: 'string',
  })
  TimelineCountry: string;

  @property({
    type: 'string',
  })
  LastUpdate: string;

  @property({
    type: 'string',
  })
  Country: string;

  @property({
    type: 'string',
  })
  Province: string;

  @property({
    type: 'string',
  })
  ProvinceSlug: string;

  @property({
    type: 'string',
  })
  City: string;

  @property({
    type: 'string',
  })
  CitySlug: string;

  @property({
    type: 'string',
  })
  Timeline: string;

  @property({
    type: 'string',
  })
  CombinedKey: string;

  @property({
    type: 'string',
  })
  ProvinceTimeline: string;
}

@model()
class State extends Entity {
  @property({
    type: 'number',
  })
  Lat: number;

  @property({
    type: 'number',
  })
  Long: number;

  @property({
    type: 'number',
  })
  Confirmed: number;

  @property({
    type: 'number',
  })
  Deaths: number;

  @property({
    type: 'number',
  })
  Recovered: number;

  @property({
    type: 'number',
  })
  Active: number;

  @property({
    type: 'number',
  })
  NewConfirmed: number;

  @property({
    type: 'number',
  })
  NewDeaths: number;

  @property({
    type: 'number',
  })
  NewRecovered: number;

  @property({
    type: 'number',
  })
  NewActive: number;

  @property({
    type: 'number',
  })
  YesterdayConfirmed: number;

  @property({
    type: 'number',
  })
  YesterdayDeaths: number;

  @property({
    type: 'number',
  })
  YesterdayRecovered: number;

  @property({
    type: 'number',
  })
  YesterdayActive: number;

  @property({
    type: 'string',
  })
  Source: string;

  @property({
    type: 'string',
  })
  CountryCode: string;

  @property({
    type: 'string',
  })
  CountrySlug: string;

  @property({
    type: 'string',
  })
  TimelineCountry: string;

  @property({
    type: 'string',
  })
  LastUpdate: string;

  @property({
    type: 'string',
  })
  Country: string;

  @property({
    type: 'string',
  })
  Province: string;

  @property({
    type: 'string',
  })
  ProvinceSlug: string;

  @property({
    type: 'string',
  })
  CombinedKey: string;

  @property({
    type: 'string',
  })
  Timeline: string;

  @property.array(City)
  City: City[];
}

@model()
export class Country extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  _id: string;

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
  Confirmed: number;

  @property({
    type: 'number',
    required: true,
  })
  Deaths: number;

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
    type: 'number',
    required: true,
  })
  NewConfirmed: number;

  @property({
    type: 'number',
    required: true,
  })
  NewDeaths: number;

  @property({
    type: 'number',
    required: true,
  })
  NewRecovered: number;

  @property({
    type: 'number',
    required: true,
  })
  NewActive: number;

  @property({
    type: 'number',
    required: true,
  })
  YesterdayConfirmed: number;

  @property({
    type: 'number',
    required: true,
  })
  YesterdayDeaths: number;

  @property({
    type: 'number',
    required: true,
  })
  YesterdayRecovered: number;

  @property({
    type: 'number',
    required: true,
  })
  YesterdayActive: number;

  @property({
    type: 'string',
    required: true,
  })
  Source: string;

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
    type: 'string',
    required: true,
  })
  Timeline: string;

  @property({
    type: 'string',
    required: true,
  })
  LastUpdate: string;

  @property.array(State)
  State: State[];

  constructor(data?: Partial<Country>) {
    super(data);
  }
}

export interface CountryRelations {
  // describe navigational properties here
}

export type CountryWithRelations = Country & CountryRelations;
