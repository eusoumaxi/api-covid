/* eslint-disable*/
const moment = require('moment');
const {getCountriesURL, uppercaseSlug} = require('./utilities');

moment().format();

class Match {
  matchCountry(countryName: string, startDate?: Date, endDate?: Date) {
    let data;
    if (startDate && endDate) {
      data = {
        CountrySlug: getCountriesURL(countryName),
        LastUpdate: {
          $gte: moment(startDate, 'DD-MM-YYYY').toDate(),
          $lte: moment(endDate, 'DD-MM-YYYY').toDate(),
        },
      };
    } else if (startDate) {
      data = {
        CountrySlug: getCountriesURL(countryName),
        LastUpdate: {$gte: moment(startDate, 'DD-MM-YYYY').toDate()},
      };
    } else if (endDate) {
      data = {
        CountrySlug: getCountriesURL(countryName),
        LastUpdate: {$lte: moment(endDate, 'DD-MM-YYYY').toDate()},
      };
    } else {
      data = {CountrySlug: getCountriesURL(countryName)};
    }
    return data;
  }

  matchProvince(
    countryName: string,
    provinceName: string,
    startDate?: Date,
    endDate?: Date,
  ) {
    let data;
    if (startDate && endDate) {
      data = {
        CountrySlug: getCountriesURL(countryName),
        ProvinceSlug: uppercaseSlug(provinceName),
        LastUpdate: {
          $gte: moment(startDate, 'DD-MM-YYYY').toDate(),
          $lte: moment(endDate, 'DD-MM-YYYY').toDate(),
        },
      };
    } else if (startDate) {
      data = {
        CountrySlug: getCountriesURL(countryName),
        ProvinceSlug: uppercaseSlug(provinceName),
        LastUpdate: {$gte: moment(startDate, 'DD-MM-YYYY').toDate()},
      };
    } else if (endDate) {
      data = {
        CountrySlug: getCountriesURL(countryName),
        ProvinceSlug: uppercaseSlug(provinceName),
        LastUpdate: {$lte: moment(endDate, 'DD-MM-YYYY').toDate()},
      };
    } else {
      data = {
        CountrySlug: getCountriesURL(countryName),
        ProvinceSlug: uppercaseSlug(provinceName),
      };
    }
    return data;
  }

  matchCity(
    countryName: string,
    provinceName: string,
    cityName: string,
    startDate: Date,
    endDate: Date,
  ) {
    let data;
    if (startDate && endDate) {
      data = {
        CountrySlug: getCountriesURL(countryName),
        ProvinceSlug: uppercaseSlug(provinceName),
        CitySlug: uppercaseSlug(cityName),
        LastUpdate: {
          $gte: moment(startDate, 'DD-MM-YYYY').toDate(),
          $lte: moment(endDate, 'DD-MM-YYYY').toDate(),
        },
      };
    } else if (startDate) {
      data = {
        CountrySlug: getCountriesURL(countryName),
        ProvinceSlug: uppercaseSlug(provinceName),
        CitySlug: uppercaseSlug(cityName),
        LastUpdate: {$gte: moment(startDate, 'DD-MM-YYYY').toDate()},
      };
    } else if (endDate) {
      data = {
        CountrySlug: getCountriesURL(countryName),
        ProvinceSlug: uppercaseSlug(provinceName),
        CitySlug: uppercaseSlug(cityName),
        LastUpdate: {$lte: moment(endDate, 'DD-MM-YYYY').toDate()},
      };
    } else {
      data = {
        CountrySlug: getCountriesURL(countryName),
        ProvinceSlug: uppercaseSlug(provinceName),
        CitySlug: uppercaseSlug(cityName),
      };
    }
    return data;
  }
}
export default Match;
