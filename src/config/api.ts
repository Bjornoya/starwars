import { API } from './settings';
import { ICharacters } from './interface';
import { mapCharacters } from './utils';

export const getCharacters = async (query: string) => {
  const response = await fetch(`${API}/people/${query}`);
  const result: ICharacters = await response.json();

  return mapCharacters(result);
};
