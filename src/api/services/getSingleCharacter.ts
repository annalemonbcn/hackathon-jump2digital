// Types
import { CharacterResponseFromApi } from "../../types";

/**
 * fetchCharacter *
 * Fetch single character from api
 * @param id 
 * @returns response in json format
 */
const fetchCharacter = (id: string): Promise<CharacterResponseFromApi> => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.json())
    .then((data) => {
      if (data && data.id) {
        return data;
      } else {
        throw new Error("Error: No results found");
      }
    })
    .catch((error) => {
      console.error(`Error in fetchCaracter: ${error}`);
      throw error;
    });
};

/**
 * getSingleCharacter *
 * Exec fetch request and return the data
 * @param id 
 * @returns res
 */
export const getSingleCharacter = (id: string) => {
  return fetchCharacter(id)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.error(`Error in getSingleCharacter: ${error}`);
      throw error;
    });
};
