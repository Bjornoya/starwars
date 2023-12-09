import { API } from './settings';
import { ICharacters } from './interface';
import { mapCharacters } from './utils';

export const getCharacters = async (page: number) => {
  const response = await fetch(`${API}/people/?page=${page}`);
  const result: ICharacters = await response.json();

  return mapCharacters(result);
};
