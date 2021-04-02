import countriesJson from './countries.json';
/* eslint-disable */
// const { config } = require('../../../config');
// const { getConnectionCountry } = require('../../../lib/lowdb');

// const countriesJson = require('../data/countries.json');

// const getProperty = (obj, key) => obj[key];

// const uppercaseSlug = (word) => word.toLowerCase().replace(/ /g, '-');

export const getCountriesURL = (strinp: string) => {
  const country = countriesJson.find(
    c =>
      strinp.toLowerCase().replace(/ /g, '-') === c.Slug ||
      strinp.toUpperCase() === c.ISO2,
  );
  return country ? country.Slug : 'not-found';
};

export const uppercaseSlug = (word: string) =>
  word.toLowerCase().replace(/ /g, '-');

export const escapeStringRegexp = (string: string) => {
  if (typeof string !== 'string') {
    throw new TypeError('Expected a string');
  }

  // Escape characters with special meaning either inside or outside character sets.
  // Use a simple backslash escape when it’s always valid, and a \unnnn escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
  return string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
};

// const verifyState = (country) =>
//   getConnectionCountry().get('countryData').find(country).value()[country].State
//     .length === 0;
// const getStateURL = (country, state) => {
//   const pronvice = getConnectionCountry()
//     .get('countryData')
//     .find(country)
//     .value()[country].State;
//   return (
//     pronvice.find(
//       (province) =>
//         province.Province_State.toLowerCase().replace(/ /g, '-') ===
//         state.toLowerCase().replace(/ /g, '-')
//     ) === undefined
//   );
// };

// // i.Province_State.toLowerCase().replace(/ /g, '-') ===
// //         'puerto-rico'.toLowerCase().replace(/ /g, '-')
// const error400 = {
//   error: '400',
//   message: 'bad request,heck the parameters',
// };

// const error404Countries = {
//   statusCode: 404,
//   error: 'Not Found',
//   message: 'Invalid country',
//   availableCountries: `${config.url}/country`,
// };
// const dataFilterHelp = {
//   fields: {
//     date: 'MM-DD-YYY',
//     endDate: 'final date, Optional!!',
//     country: 'Country',
//   },
//   exampleOne: {
//     date: '01-22-2020',
//     country: 'canada',
//     urlExample: `${config.url}/filters?date=01-22-2020&country=canada`,
//   },
//   exampleSecond: {
//     date: '06-22-2020',
//     endDate: '06-25-2020',
//     country: 'co',
//     urlExample: `${config.url}/filters?date=06-22-2020&endDate=06-25-2020&country=co`,
//   },
//   listOfCountries: `${config.url}/country`,
// };

// module.exports = {
//   getProperty,
//   uppercaseSlug,
//   getCountriesURL,
//   dataFilterHelp,
//   verifyState,
//   getStateURL,
//   error400,
//   error404Countries,
// };
