/* eslint-disable @typescript-eslint/no-explicit-any */
import {repository} from '@loopback/repository';
import {get, param, response} from '@loopback/rest';
import {ITimeline, ITimelineCity, ITimelineCountry, ITimelineState} from '../@types/timeline';
import {HistoricalRepository} from '../repositories';
import Match from '../tools/match';


export class TimelineController {
  constructor(
    @repository(HistoricalRepository)
    public historicalRepository: HistoricalRepository,

    private collection: any = (historicalRepository.dataSource
      .connector as any).collection('Historical'),

    private match: Match = new Match(),
  ) { }

  @get('/timeline/{country}')
  @response(200, {
    description: 'Historical model instance',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          title: 'TimeLineCountry',
          properties: {
            Date: {type: 'string'},
            CountryRegion: {type: 'string'},
            Active: {type: 'number'},
            Deaths: {type: 'number'},
            Recovered: {type: 'number'},
            Source: {type: 'string'},
            headers: {
              type: 'object',
              properties: {
                'Content-Type': {type: 'string'},
              },
              additionalProperties: true,
            },
          },
        },
      },
    },
  })
  async timelinePercountry(
    @param.query.date('startDate') startDate: Date,
    @param.query.date('endDate') endDate: Date,
    @param.path.string('country') id: string,
  ): Promise<ITimelineCountry[]> {
    const getTimeline: ITimeline[] = await this.collection
      .aggregate([
        {
          $match: this.match.matchCountry(id, startDate, endDate),
        },
        {
          $group: {
            _id: '$LastUpdate',
            CountryRegion: {$first: '$CountryRegion'},
            Active: {$sum: '$Active'},
            Deaths: {$sum: '$Deaths'},
            Confirmed: {$sum: '$Confirmed'},
            Recovered: {$sum: '$Recovered'},
            Source: {$first: '$Source'},
          },
        },
        {$sort: {_id: -1}},
      ])
      .get();
    return getTimeline.map(v => ({
      Date: v._id,
      CountryRegion: v.CountryRegion,
      Active: v.Active,
      Deaths: v.Deaths,
      Confirmed: v.Confirmed,
      Recovered: v.Recovered,
      Source: v.Source,
    }));
  }

  @get('/timeline/{country}/{state}')
  @response(200, {
    description: 'Historical model instance',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          title: 'Timeline per state',
          description: 'Returns timeline state data',
          properties: {
            Date: {type: 'date'},
            CountryRegion: {type: 'string'},
            Province: {type: 'string'},
            Active: {type: 'number'},
            Deaths: {type: 'number'},
            Recovered: {type: 'number'},
            Source: {type: 'string'},
            headers: {
              type: 'object',
              properties: {
                'Content-Type': {type: 'string'},
              },
              additionalProperties: true,
            },
          },
        },
      },
    },
  })
  async timelinePerState(
    @param.query.date('startDate') startDate: Date,
    @param.query.date('endDate') endDate: Date,
    @param.path.string('state') state: string,
    @param.path.string('country') id: string,
  ): Promise<ITimelineState[]> {
    const getTimeline: ITimeline[] = await this.collection
      .aggregate([
        {
          $match: this.match.matchProvince(id, state, startDate, endDate),
        },
        {
          $group: {
            _id: '$LastUpdate',
            CountryRegion: {$first: '$CountryRegion'},
            Province: { $first: '$Province' },
            Active: {$sum: '$Active'},
            Deaths: {$sum: '$Deaths'},
            Confirmed: {$sum: '$Confirmed'},
            Recovered: {$sum: '$Recovered'},
            Source: {$first: '$Source'},
          },
        },
        {$sort: {_id: -1}},
      ])
      .get();
    return getTimeline.map(v => ({
      Date: v._id,
      CountryRegion: v.CountryRegion,
      Province: v.Province,
      Active: v.Active,
      Confirmed: v.Confirmed,
      Deaths: v.Deaths,
      Recovered: v.Recovered,
      Source: v.Source,
    }));
  }

  @get('/timeline/{country}/{state}/{city}')
  @response(200, {
    description: 'Historical model instance',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          title: 'TimeLine per City (Only Usa)',
          description: 'Returns timeline city',
          properties: {
            Date: {type: 'date'},
            CountryRegion: {type: 'string'},
            Province: {type: 'string'},
            City: {type: 'string'},
            Active: {type: 'number'},
            Deaths: {type: 'number'},
            Recovered: {type: 'number'},
            Source: {type: 'string'},
            headers: {
              type: 'object',
              properties: {
                'Content-Type': {type: 'string'},
              },
              additionalProperties: true,
            },
          },
        },
      },
    },
  })
  async timelinePerCity(
    @param.query.date('startDate') startDate: Date,
    @param.query.date('endDate') endDate: Date,
    @param.path.string('state') state: string,
    @param.path.string('country') id: string,
    @param.path.string('city') city: string,
  ): Promise<ITimelineCity[]> {
    const getTimeline: ITimeline[] = await this.collection
      .aggregate([
        {
          $match: this.match.matchCity(id, state, city, startDate, endDate),
        },
        {
          $group: {
            _id: '$LastUpdate',
            CountryRegion: {$first: '$CountryRegion'},
            Province: { $first: '$Province' },
            City: { $first: '$City' },
            Active: {$sum: '$Active'},
            Deaths: {$sum: '$Deaths'},
            Confirmed: {$sum: '$Confirmed'},
            Recovered: {$sum: '$Recovered'},
            Source: {$first: '$Source'},
          },
        },
        {$sort: {_id: -1}},
      ])
      .get();
    return getTimeline.map(v => ({
      Date: v._id,
      CountryRegion: v.CountryRegion,
      Province: v.Province,
      City: v.City,
      Confirmed: v.Confirmed,
      Active: v.Active,
      Deaths: v.Deaths,
      Recovered: v.Recovered,
      Source: v.Source,
    }));
  }

}
