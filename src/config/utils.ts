import _omit from 'lodash.omit';
import { format, parseISO } from 'date-fns';
import { ICharacter, ICharacters, INormalizedPlanet, IPlanet } from './interface';
import { DATE_FORMAT } from './settings';

export const formatDate = (isoDate: string) => format(parseISO(isoDate), DATE_FORMAT);

export const mapCharacters = (characters: ICharacters): ICharacters<'normalized'> => {
  const results = characters.results.map((character) =>
    _omit(character, ['homeworld', 'films', 'species', 'vehicles', 'starships', 'created', 'edited']),
  );
  return { ...characters, results };
};

export const mapCharacter = (character: ICharacter) => {
  return {
    ..._omit(character, ['url']),
    created: formatDate(character.created),
    edited: formatDate(character.edited),
  };
};

export const mapPlanet = (planet: IPlanet): INormalizedPlanet => {
  return {
    ..._omit(planet, ['residents', 'films', 'url']),
    created: formatDate(planet.created),
    edited: formatDate(planet.edited),
  };
};
