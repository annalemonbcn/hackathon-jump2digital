// Types
import { ResponseFromApi } from "../../types";

const fetchCharactersByName = (query: string): Promise<ResponseFromApi> => {
  return fetch(`https://rickandmortyapi.com/api/character/?name=${query}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.results && data.results.length > 0) {
        return data;
      } else {
        throw new Error("Error: no results found");
      }
    })
    .catch((error) => {
      console.error("Error in fetchCharactersByName");
      throw error;
    });
};

export const getAllCharactersByName = (query: string) => {
  return fetchCharactersByName(query)
    .then((res) => {
      return res.results;
    })
    .catch((error) => {
      console.error(`Error in getAllCharactersByName: ${error}`);
      throw error;
    });
};
