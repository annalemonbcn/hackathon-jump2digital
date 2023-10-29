// Hooks
import { createContext, useState, ReactNode, useContext } from "react";

// Types
import { CharacterResponseFromApi } from "../../types";

// Services
import { getAllCharactersByNameAndPage } from "../services/getCharactersByName";

// Context
import { CharactersContext } from "./CharactersProvider";

// Toast
import { toast } from "sonner";

// Props types
interface SearchContextProps {
  setQuery: (str: string) => void;
  setPage: (num: number) => void;
  searchActive: boolean;
  setSearchState: (bool: boolean) => void;
  loadMoreCharactersByNameAndPage: () => void;
}

interface SearchProviderProps {
  children: ReactNode;
}

// Create Context
export const SearchContext = createContext<SearchContextProps | undefined>(
  undefined
);

const SearchProvider = (props: SearchProviderProps) => {
  // State
  const [query, setQuery] = useState<string>("");
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  // Context
  const charactersContext = useContext(CharactersContext);

  // Actions
  const setSearchState = (bool: boolean): void => {
    setSearchActive(bool);
  };

  const loadMoreCharactersByNameAndPage = (): void => {
    const nextPage = (page + 1).toString();

    // Call the getAllCharactersByNameAndPage method
    getAllCharactersByNameAndPage(query, nextPage)
      .then((newCharacters: CharacterResponseFromApi[]) => {

        // Get the prev characters
        const prevCharacters = charactersContext?.allCharacters;

        // Check if prevCharacters has data
        if (prevCharacters !== undefined) {
          // Concat the 2 arrays
          const auxNewCharacters = prevCharacters?.concat(newCharacters);
          // Set the prevCharacters + newCharacters as new state
          charactersContext?.setAllCharacters(auxNewCharacters);
          // Set +1 page
          setPage(page + 1);
        }
      })
      .catch((error) => {
        console.error("Error loading more characters:", error);
        toast.error("Error loading characters");
      });
  };

  // Provider value
  const searchContextValue: SearchContextProps = {
    setQuery,
    setPage,
    searchActive,
    setSearchState,
    loadMoreCharactersByNameAndPage,
  };

  return (
    <SearchContext.Provider value={searchContextValue}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
