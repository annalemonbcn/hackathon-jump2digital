// Hooks
import { createContext, useState, ReactNode, useEffect } from "react";

// Types
import { CharacterResponseFromApi } from "../../types";

// Services
import { getAllCharacters } from "../services/getAllCharacters";

// Props types
interface CharactersContextProps {
  allCharacters: Array<CharacterResponseFromApi>
  setAllCharacters: (characters: CharacterResponseFromApi[]) => void
  loadMoreCharacters: () => void;
}

interface CharactersProviderProps {
  children: ReactNode;
}

// Create Context
export const CharactersContext = createContext<CharactersContextProps | undefined>(undefined);


const CharactersProvider = (props: CharactersProviderProps) => {
  // State
  const [allCharacters, setAllCharacters] = useState<CharacterResponseFromApi[]>();
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Call the getAllCharacters method and set the processed response
    getAllCharacters("https://rickandmortyapi.com/api/character")
      .then((characters) => setAllCharacters(characters))
      .catch((error) => {
        console.error("Error loading characters:", error);
      });
  }, []);


  // Actions
  const loadMoreCharacters = ():void => {
    const nextPage: string = `https://rickandmortyapi.com/api/character?page=${page + 1}`;

    getAllCharacters(nextPage)
      .then((newCharacters) => {
        setAllCharacters((prevCharacters) => [...(prevCharacters || []), ...newCharacters]);
        setPage(page + 1);
      })
      .catch((error) => {
        console.error("Error loading more characters:", error);
      });
  }

  // Provider value
  const charactersContextValue: CharactersContextProps = {
    allCharacters: allCharacters || [],
    setAllCharacters,
    loadMoreCharacters
  };

  return (
    <CharactersContext.Provider value={charactersContextValue}>
      {props.children}
    </CharactersContext.Provider>
  );
};

export default CharactersProvider;
