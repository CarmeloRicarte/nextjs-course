import { type Character } from '../models';

export const getCharacters = async (): Promise<Character[]> => {
  const url = 'https://rickandmortyapi.com/api/character';
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};
