export interface ICountry {
  Country: string;
  Slug: string;
  ISO2: string;
}

export interface ICity {
  Lat: number;
  Long: number;
  Confirmed: number;
  Deaths: number;
  Recovered: number;
  Active: number;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  NewActive: number;
  YesterdayConfirmed: number;
  YesterdayDeaths: number;
  YesterdayRecovered: number;
  YesterdayActive: number;
  Source: string;
  Country: string;
  CountryCode: string;
  CountrySlug: string;
  Province: string;
  ProvinceSlug: string;
  City: string;
  CitySlug: string;
  Timeline: string;
  LastUpdate: Date;
}

export interface IState {
  Lat: number;
  Long: number;
  Confirmed: number;
  Deaths: number;
  Recovered: number;
  Active: number;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  NewActive: number;
  YesterdayConfirmed: number;
  YesterdayDeaths: number;
  YesterdayRecovered: number;
  YesterdayActive: number;
  Source: string;
  CountryCode: string;
  CountrySlug: string;
  LastUpdate: string;
  Country: string;
  Province: string;
  ProvinceSlug: string;
  CombinedKey: string;
  Timeline: string;
  City: ICity[];
}

export interface ICountryMongo {
  _id: string;
  Lat: number;
  Long: number;
  Confirmed: number;
  Deaths: number;
  Recovered: number;
  Active: number;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  NewActive: number;
  YesterdayConfirmed: number;
  YesterdayDeaths: number;
  YesterdayRecovered: number;
  YesterdayActive: number;
  Source: string;
  CountryCode: string;
  CountrySlug: string;
  Timeline: string;
  LastUpdate: Date;
  State: IState[];
}
