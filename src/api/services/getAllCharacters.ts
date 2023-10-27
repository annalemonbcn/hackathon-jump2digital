// Types
import { ResponseFromApi } from "../../types";

/**
 * fetchCharacters *
 * Fetch request to rick and morty api
 * @returns response in json format
 */
const fetchCharacters = (url: string): Promise<ResponseFromApi> => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.results && data.results.length > 0) {
        console.log('data', data)
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
export const getAllCharacters = (url: string) => {
  return fetchCharacters(url)
    .then((res) => {
      return res.results;
    })
    .catch((error) => {
      console.error(`Error in getAllCharacters: ${error}`);
      throw error;
    });
};
