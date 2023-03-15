import { type Location } from '../models';

export const getLocations = async (): Promise<Location[]> => {
  const url = 'https://rickandmortyapi.com/api/location';
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};
