// Types
import { Character, ResponseFromApi, CharacterResponseFromApi } from "../types";

/**
 * fetchCharacters *
 * Fetch request to rick and morty api
 * @returns response in json format
 */
const fetchCharacters = (): Promise<ResponseFromApi> => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((res) =>
      res.json()
    );
};

/**
 * mapFromApiToCharacters *
 * Select properties from characterFromApi to create the Array<Character>
 * @param dataObj 
 * @returns Array<Character>
 */
const mapFromApiToCharacters = (
  dataObj: Array<CharacterResponseFromApi>
): Array<Character> => {
  return dataObj.map((characterFromApi) => ({
    id: characterFromApi.id,
    name: characterFromApi.name,
    status: characterFromApi.status,
    species: characterFromApi.species,
    type: characterFromApi.type,
    gender: characterFromApi.gender,
    origin: characterFromApi.origin,
    image: characterFromApi.image,
    url: characterFromApi.url,
  }));
};

/**
 * getAllCharacters *
 * Exec fetch request, map the elements and return the data
 * @returns selectedCharacters
 */
export const getAllCharacters = () => {
  return fetchCharacters()
    .then((res) => {
      const selectedCharacters = mapFromApiToCharacters(res.results);
      return selectedCharacters;
    })
}