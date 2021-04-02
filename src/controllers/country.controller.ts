/* eslint-disable */
import {FilterExcludingWhere, repository} from '@loopback/repository';
import {
  get,
  getModelSchemaRef,
  HttpErrors,
  param,
  response
} from '@loopback/rest';
import {ICity, ICountry, ICountryMongo, IState} from '../@types';
import {Country} from '../models';
import {CountryRepository} from '../repositories';
import CountryAll from '../tools/countries.json';
import {escapeStringRegexp, getCountriesURL} from '../tools/utility';



export class CountryController {
  constructor(
    @repository(CountryRepository)
    public countryRepository: CountryRepository,
    private collection: any = (countryRepository.dataSource
      .connector as any).collection('Country'),
  ) {}

  @get('/country')
  @response(200, {
    description: 'Array of Country model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          properties: {
            Country: {type: 'string'},
            Slug: {type: 'string'},
            ISO2: {type: 'number'},
          },
        },
      },
    },
  })
  async allCountry(): Promise<ICountry[]> {
    return CountryAll;
  }

  @get('/country/{country}')
  @response(200, {
    description: 'Country model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Country, {includeRelations: true}),
      },
    },
  })
  async findOneCountry(
    @param.path.string('country') country: string,
    @param.filter(Country, {exclude: 'where'})
    filter?: FilterExcludingWhere<Country>,
  ): Promise<any> {
    const findCountry = getCountriesURL(country);
    if (findCountry === 'not-found') {
      throw new HttpErrors.NotFound();
    }
    return this.countryRepository.findOne(
      {where: {CountrySlug: getCountriesURL(country)}},
      filter,
    );
  }

  @get('/country/{country}/{state}')
  @response(200, {
    description: 'Country model instance',
    // content: {
    //   'application/json': {
    //     schema: getModelSchemaRef(Country, {includeRelations: true}),
    //   },
    // },
  })
  async findbyState(
    @param.path.string('country') country: string,
    @param.path.string('state') state: string,
  ): Promise<IState> {
    const CountrySlug = getCountriesURL(country);
    const findStates: ICountryMongo = await this.collection.findOne(
      {
        CountrySlug,
        'State.ProvinceSlug': {
          $regex: new RegExp(escapeStringRegexp(state), 'i'),
        },
      },
      {
        fields: {State: 1},
      },
    );
    if (!findStates) {
      throw new HttpErrors.NotFound();
    }
   const findState= findStates.State.find(v =>
      v.ProvinceSlug.match(new RegExp(escapeStringRegexp(state), 'i')),
    );

    if (!findState) {
      throw new HttpErrors.NotFound();
    }
    return findState
  }
  @get('/country/{country}/{state}/{city}')
  @response(200, {
    description: 'Country model instance',
    // content: {
    //   'application/json': {
    //     schema: getModelSchemaRef(Country, {includeRelations: true}),
    //   },
    // },
  })
  async findbyCity(
    @param.path.string('country') country: string,
    @param.path.string('state') state: string,
    @param.path.string('city') city: string,
  ): Promise<ICity> {
    const CountrySlug = getCountriesURL(country);
    const findState: ICountryMongo = await this.collection.findOne(
      {
        CountrySlug,
        'State.ProvinceSlug': {
          $regex: new RegExp(escapeStringRegexp(state), 'i'),
        },
        'State.City.City': {
          $regex: new RegExp(escapeStringRegexp(state), 'i'),
        },
      },
      {
        fields: {'State.Province': 1, 'State.City': 1},
      },
    );
    if (!findState) {
      throw new HttpErrors.NotFound();
    }
    const findCity = findState.State.find(v =>
      v.Province.match(new RegExp(escapeStringRegexp(state), 'i')),
    )?.City.find(c => c.City.match(new RegExp(escapeStringRegexp(city), 'i')));

    if (!findCity) {
      throw new HttpErrors.NotFound();
    }
    return findCity
  }
}
