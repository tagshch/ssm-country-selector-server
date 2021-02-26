const { gql } = require('apollo-server');
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
module.exports = gql`
  
  # This "Country" type defines the queryable fields for every country in our data source.
  # Not all fields described, see example below
  
  type Country {
    name: String
    topLevelDomain: [String]
    capital: String
    population: Int
    area: Int
    gini: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  
  type Query {
    countries: [Country]
  }
`;

const example = {
  "name": "Afghanistan",
  "topLevelDomain": [".af"],
  "alpha2Code": "AF",
  "alpha3Code": "AFG",
  "callingCodes": ["93"],
  "capital": "Kabul",
  "altSpellings": ["AF", "Afġānistān"],
  "region": "Asia",
  "subregion": "Southern Asia",
  "population": 27657145,
  "latlng": [33.0, 65.0],
  "demonym": "Afghan",
  "area": 652230.0,
  "gini": 27.8,
  "timezones": ["UTC+04:30"],
  "borders": [
      "IRN",
      "PAK",
      "TKM",
      "UZB",
      "TJK",
      "CHN"
  ],
  "nativeName": "افغانستان",
  "numericCode": "004",
  "currencies": [{
      "code": "AFN",
      "name": "Afghan afghani",
      "symbol": "؋"
  }],
  "languages": [{
      "iso639_1": "ps",
      "iso639_2": "pus",
      "name": "Pashto",
      "nativeName": "پښتو"
  },
  {
      "iso639_1": "uz",
      "iso639_2": "uzb",
      "name": "Uzbek",
      "nativeName": "Oʻzbek"
  },
  {
      "iso639_1": "tk",
      "iso639_2": "tuk",
      "name": "Turkmen",
      "nativeName": "Türkmen"
  }],
  "translations": {
      "de": "Afghanistan",
      "es": "Afganistán",
      "fr": "Afghanistan",
      "ja": "アフガニスタン",
      "it": "Afghanistan", "br": "Afeganistão", "pt": "Afeganistão", "nl": "Afghanistan", "hr": "Afganistan", "fa": "افغانستان"
  },
  "flag": "https://restcountries.eu/data/afg.svg",
  "regionalBlocs": [{
      "acronym": "SAARC",
      "name": "South Asian Association for Regional Cooperation",
      "otherAcronyms": [],
      "otherNames": []
  }],
  "cioc": "AFG"
}
