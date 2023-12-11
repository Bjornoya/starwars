import { test, assert } from 'vitest';
import { format, parseISO } from 'date-fns';
import { ICharacter, ICharacters, IFilm, INormalizedFilm, INormalizedPlanet, IPlanet } from './interface';
import { formatDate, mapCharacter, mapCharacters, mapFilm, mapPlanet } from './utils';
import { DATE_FORMAT } from './settings';

test('formatDate should format ISO date to yyyy-MM-dd format', () => {
  const isoDate = '2023-01-15T12:34:56.789Z';
  const formattedDate = formatDate(isoDate);
  const expectedFormattedDate = format(parseISO(isoDate), DATE_FORMAT);
  assert.strictEqual(formattedDate, expectedFormattedDate);
});

test('mapCharacter should map character and format dates', () => {
  const inputCharacter: ICharacter = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 'Tatooine',
    films: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'],
    species: ['Human'],
    vehicles: ['X-34 landspeeder', 'T-16 skyhopper'],
    starships: ['X-wing starfighter', 'Imperial Speeder Bike'],
    created: '2021-01-01T10:30:00Z',
    edited: '2021-02-01T12:45:00Z',
    url: 'https://swapi.dev/api/people/1/',
  };

  const mappedCharacter = mapCharacter(inputCharacter);

  const expectedMappedCharacter = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 'Tatooine',
    films: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'],
    species: ['Human'],
    vehicles: ['X-34 landspeeder', 'T-16 skyhopper'],
    starships: ['X-wing starfighter', 'Imperial Speeder Bike'],
    created: '2021-01-01',
    edited: '2021-02-01',
  };

  assert.deepStrictEqual(mappedCharacter, expectedMappedCharacter);
});

test('mapCharacters should normalize character data', () => {
  const characters: ICharacters = {
    count: 2,
    next: null,
    previous: null,
    results: [
      {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        birth_year: '19BBY',
        gender: 'male',
        homeworld: 'Tatooine',
        films: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'],
        species: ['Human'],
        vehicles: ['X-34 landspeeder', 'T-16 skyhopper'],
        starships: ['X-wing starfighter', 'Imperial Speeder Bike'],
        created: '2021-01-01',
        edited: '2021-02-01',
        url: 'https://swapi.dev/api/people/1/',
      },
    ],
  };

  const normalizedCharacters = mapCharacters(characters);

  const expected: ICharacters<'normalized'> = {
    count: 2,
    next: null,
    previous: null,
    results: [
      {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        birth_year: '19BBY',
        gender: 'male',
        url: 'https://swapi.dev/api/people/1/',
      },
    ],
  };

  assert.deepStrictEqual(normalizedCharacters, expected);
});

test('mapPlanet should map planet and format dates', () => {
  const inputPlanet: IPlanet = {
    name: 'Tatooine',
    rotation_period: '23',
    orbital_period: '304',
    diameter: '10465',
    climate: 'arid',
    gravity: '1 standard',
    terrain: 'desert',
    surface_water: '1',
    population: '200000',
    residents: ['Luke Skywalker', 'Anakin Skywalker'],
    films: ['A New Hope', 'The Phantom Menace'],
    created: '2021-01-02T08:45:00Z',
    edited: '2021-02-03T11:20:00Z',
    url: 'https://swapi.dev/api/planets/1/',
  };

  const mappedPlanet: INormalizedPlanet = mapPlanet(inputPlanet);

  const expectedMappedPlanet: INormalizedPlanet = {
    name: 'Tatooine',
    rotation_period: '23',
    orbital_period: '304',
    diameter: '10465',
    climate: 'arid',
    gravity: '1 standard',
    terrain: 'desert',
    surface_water: '1',
    population: '200000',
    created: '2021-01-02',
    edited: '2021-02-03',
  };

  assert.deepStrictEqual(mappedPlanet, expectedMappedPlanet);
});

test('mapFilm should map film data', () => {
  const inputFilm: IFilm = {
    title: 'A New Hope',
    episode_id: 4,
    opening_crawl: 'A long time ago in a galaxy far, far away...',
    director: 'George Lucas',
    producer: 'Gary Kurtz, Rick McCallum',
    release_date: '1977-05-25',
    characters: ['Luke Skywalker', 'Princess Leia'],
    planets: ['Tatooine', 'Alderaan'],
    starships: ['X-wing', 'Millennium Falcon'],
    vehicles: ['Sand Crawler', 'TIE Fighter'],
    species: ['Human', 'Wookiee'],
    created: '2021-01-02T08:45:00Z',
    edited: '2021-02-03T11:20:00Z',
    url: 'https://swapi.dev/api/films/1/',
  };

  const mappedFilm: INormalizedFilm = mapFilm(inputFilm);

  const expectedMappedFilm: INormalizedFilm = {
    title: 'A New Hope',
    episode_id: 4,
    opening_crawl: 'A long time ago in a galaxy far, far away...',
    director: 'George Lucas',
    producer: 'Gary Kurtz, Rick McCallum',
    release_date: '1977-05-25',
  };

  assert.deepStrictEqual(mappedFilm, expectedMappedFilm);
});
