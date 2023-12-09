import _omit from 'lodash.omit';
import { ICharacters } from './interface';

export const mapCharacters = (characters: ICharacters): ICharacters<'normalized'> => {
  const results = characters.results.map((character) =>
    _omit(character, ['homeworld', 'films', 'species', 'vehicles', 'starships', 'created', 'edited']),
  );
  return { ...characters, results };
};
