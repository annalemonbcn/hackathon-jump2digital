// Hooks
import React, { createContext, useState, ReactNode, useContext, Dispatch, SetStateAction } from "react";

// Services
import { getAllCharactersByNameAndPage } from "../services/getCharactersByName";

// Context
import { CharactersContext } from "./CharactersProvider";

// Toast
import { toast } from "sonner";


// Props types
interface SearchContextProps {
  setQuery: Dispatch<SetStateAction<string>>;
  searchActive: boolean;
  setSearchState: (bool: boolean) => void;
  loadMoreCharactersByNameAndPage: () => void
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
  const setSearchState = (bool: boolean) => {
    setSearchActive(bool);
  };

  const loadMoreCharactersByNameAndPage = (): void => {
    const nextPage = (page + 1).toString();

    // Call the getAllCharactersByNameAndPage method
    getAllCharactersByNameAndPage(query, nextPage)
      .then((newCharacters) => {
        console.log('newCharacters', newCharacters)
        // TODO: fix this
        // Set the newCharacters but preserving the prevCharacters
        // charactersContext?.setAllCharacters((prevCharacters) => [
        //   ...(prevCharacters || []),
        //   ...newCharacters,
        // ]);
        setPage(page + 1);
      })
      .catch((error) => {
        console.error("Error loading more characters:", error);
        toast.error("Error loading characters");
      });
  }

  // Provider value
  const searchContextValue: SearchContextProps = {
    setQuery,
    searchActive,
    setSearchState,
    loadMoreCharactersByNameAndPage
  };

  return (
    <SearchContext.Provider value={searchContextValue}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
