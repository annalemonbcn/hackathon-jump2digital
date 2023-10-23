// Types
import { Character, CharacterResponseFromApi } from "../types";

/**
 * fetchCharacter *
 * Fetch single character from api
 * @returns response in json format
 */
const fetchCharacter = (id: string): Promise<CharacterResponseFromApi> => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.json())
}

const mapFromApiToCharacter = (
  dataObj: CharacterResponseFromApi
): Character => {
  return {
    id: dataObj.id,
    name: dataObj.name,
    status: dataObj.status,
    species: dataObj.species,
    type: dataObj.type,
    gender: dataObj.gender,
    origin: dataObj.origin,
    image: dataObj.image,
    url: dataObj.url,
  } = dataObj;
};

export const getSingleCharacter = (id: string) => {
  return fetchCharacter(id)
    .then((res) => {
      const selectedChar = mapFromApiToCharacter(res);
      return selectedChar;
    })
}