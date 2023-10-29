// Types
import { ResponseFromApi } from "../../types";

/**
 * fetchCharactersByName *
 * Fetch request by concrete name to rick and morty api
 * @returns response in json format
 */
/**
 * fetchCharactersByName *
 * Fetch request by concrete name to rick and morty api
 * @param url
 * @returns response in json format
 */
const fetchCharactersByName = (url: string): Promise<ResponseFromApi> => {
  return fetch(url)
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


/**
 * getAllCharactersByName *
 * Exec fetch request and return the data filtered by name
 * @param query
 * @returns res.results
 */
export const getAllCharactersByName = (query: string) => {
  const url = `https://rickandmortyapi.com/api/character/?name=${query}`;
  return fetchCharactersByName(url)
    .then((res) => res.results)
    .catch((error) => {
      console.error(`Error in getAllCharactersByName: ${error}`);
      throw error;
    });
};

/**
 * getAllCharactersByNameAndPage *
 * Exec fetch request and return the data filtered by name and page
 * @param query 
 * @param page 
 * @returns res.results
 */
export const getAllCharactersByNameAndPage = (query: string, page: string) => {
  const url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${query}`;
  return fetchCharactersByName(url)
    .then((res) => res.results)
    .catch((error) => {
      console.error(`Error in loadMoreCharactersByName: ${error}`);
      throw error;
    })
}
