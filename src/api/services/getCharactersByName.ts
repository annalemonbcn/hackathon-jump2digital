// Types
import { ResponseFromApi } from "../../types";

// Services
import { mapFromApiToCharacters } from "./getAllCharacters";

const fetchCharactersByName = (query: string): Promise<ResponseFromApi> => {
  return fetch(`https://rickandmortyapi.com/api/character/?name=${query}`)
    .then(res => res.json())
}

export const getAllCharactersByName = (query: string) => {
  return fetchCharactersByName(query)
    .then((res) => {
      const selectedCharacters = mapFromApiToCharacters(res.results);
      return selectedCharacters;
    })
}