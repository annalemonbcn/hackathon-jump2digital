// Types
import { ResponseFromApi } from "../../types";

/**
 * fetchCharacters *
 * Fetch request to rick and morty api
 * @param url
 * @returns response in json format
 */
const fetchCharacters = (url: string): Promise<ResponseFromApi> => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.results && data.results.length > 0) {
        return data;
      } else {
        throw new Error("Error: No results found");
      }
    })
    .catch((error) => {
      console.error(`Error in fetchCaracters: ${error}`);
      throw error;
    });
};

/**
 * getAllCharacters *
 * Exec fetch request and return the data
 * @returns res.results
 */
export const getAllCharacters = () => {
  const url = "https://rickandmortyapi.com/api/character"
  return fetchCharacters(url)
    .then((res) => res.results)
    .catch((error) => {
      console.error(`Error in getAllCharacters: ${error}`);
      throw error;
    });
};

/**
 * getAllCharactersByPage *
 * Exec fetch request and return the data filtered by page
 * @param page 
 * @returns 
 */
export const getAllCharactersByPage = (page: string) => {
  const url = `https://rickandmortyapi.com/api/character?page=${page}`;
  return fetchCharacters(url)
    .then((res) => res.results)
    .catch((error) => {
      console.error(`Error in loadMoreCharacters: ${error}`);
      throw error;
    })
}