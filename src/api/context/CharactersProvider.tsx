// Hooks
import { createContext, useState, ReactNode, useEffect } from "react";

// Types
import { Character } from "../../types";

// Services
import { getAllCharacters } from "../services/getAllCharacters";

// Props types
interface CharactersContextProps {
  allCharacters: Array<Character>
  setAllCharacters: (characters: Array<Character>) => void
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
  const [allCharacters, setAllCharacters] = useState<Array<Character>>();

  useEffect(() => {
    // Call the getAllCharacters method and set the processed response
    getAllCharacters()
      .then((characters) => setAllCharacters(characters))
      .catch((error) => {
        console.error("Error loading characters:", error);
      });
  }, []);

  // Provider value
  const charactersContextValue: CharactersContextProps = {
    allCharacters: allCharacters || [],
    setAllCharacters,
  };

  return (
    <CharactersContext.Provider value={charactersContextValue}>
      {props.children}
    </CharactersContext.Provider>
  );
};

export default CharactersProvider;
