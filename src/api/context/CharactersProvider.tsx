// Hooks
import { createContext, useState, ReactNode, useEffect } from "react";

// Toast
import { toast } from "sonner";

// Types
import { CharacterResponseFromApi } from "../../types";

// Services
import {
  getAllCharacters,
  getAllCharactersByPage,
} from "../services/getAllCharacters";

// Props types
interface CharactersContextProps {
  allCharacters: Array<CharacterResponseFromApi>;
  setAllCharacters: (characters: CharacterResponseFromApi[]) => void;
  loadCharacters: () => void
  loadMoreCharacters: () => void;
}

interface CharactersProviderProps {
  children: ReactNode;
}

// Create Context
export const CharactersContext = createContext<
  CharactersContextProps | undefined
>(undefined);

const CharactersProvider = (props: CharactersProviderProps) => {
  // State
  const [allCharacters, setAllCharacters] =
    useState<CharacterResponseFromApi[]>();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    loadCharacters();
  }, []);

  // Actions
  const loadCharacters = (): void => {
    getAllCharacters()
      .then((characters) => {
        setAllCharacters(characters);
      })
      .catch((error) => {
        console.error("Error loading characters:", error);
        toast.error("Error loading characters");
      });
  };

  const loadMoreCharacters = (): void => {
    const nextPage = (page + 1).toString();

    // Call the getAllCharacters method
    getAllCharactersByPage(nextPage)
      .then((newCharacters) => {
        // Set the newCharacters but preserving the prevCharacters
        setAllCharacters((prevCharacters) => [
          ...(prevCharacters || []),
          ...newCharacters,
        ]);
        setPage(page + 1);
      })
      .catch((error) => {
        console.error("Error loading more characters:", error);
        toast.error("Error loading characters");
      });
  };

  // Provider value
  const charactersContextValue: CharactersContextProps = {
    allCharacters: allCharacters || [],
    setAllCharacters,
    loadCharacters,
    loadMoreCharacters,
  };

  return (
    <CharactersContext.Provider value={charactersContextValue}>
      {props.children}
    </CharactersContext.Provider>
  );
};

export default CharactersProvider;
