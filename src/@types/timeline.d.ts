export interface ITimeline {
  _id: Date;
  CountryRegion: string;
  Province: String;
  City: String
  Confirmed: number,
  Active: number;
  Deaths: number;
  Recovered: number;
  Source: string;
}

export interface ITimelineCountry {
  Date: Date;
  CountryRegion: string;
  Active: number;
  Deaths: number;
  Confirmed: number,
  Recovered: number;
  Source: string;
}

export interface ITimelineState{
  Date: Date;
  CountryRegion: string;
  Province: String;
  Active: number;
  Deaths: number;
  Confirmed: number,
  Recovered: number;
  Source: string;
}

export interface ITimelineCity{
  Date: Date;
  CountryRegion: string;
  Province: String;
  Active: number;
  Deaths: number;
  Confirmed: number,
  Recovered: number;
  Source: string;
}
