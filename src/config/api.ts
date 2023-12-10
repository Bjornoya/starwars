import { API } from './settings';
import { ICharacter, ICharacters } from './interface';
import { mapCharacter, mapCharacters, mapFilm, mapPlanet } from './utils';

export const getByUrl = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

export const getCharacters = async (query: string) => {
  const response = await fetch(`${API}/people/${query}`);
  const result: ICharacters = await response.json();

  return mapCharacters(result);
};

export const getCharacter = async (id: string) => {
  const response = await fetch(`${API}/people/${id}`);
  const result: ICharacter = await response.json();

  return mapCharacter(result);
};

export const getPlanet = async (url: string) => {
  const result = await getByUrl(url);

  return mapPlanet(result);
};

export const getFilm = async (url: string) => {
  const result = await getByUrl(url);

  return mapFilm(result);
};
