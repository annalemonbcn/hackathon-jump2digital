// Hooks
import { createContext, useState, ReactNode, useEffect } from "react";

// Toast
import { toast } from "sonner";

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
      .then((characters) => {
        setAllCharacters(characters)
        toast.success("Characters loaded! Have fun :)")
      })
      .catch((error) => {
        console.error("Error loading characters:", error);
        toast.error("Error loading characters")
      });
  }, []);


  // Actions
  const loadMoreCharacters = ():void => {
    const nextPage: string = `https://rickandmortyapi.com/api/character?page=${page + 1}`;

    // Call the getAllCharacters method
    getAllCharacters(nextPage)
      .then((newCharacters) => {
        // Set the newCharacters but preserving the prevCharacters
        setAllCharacters((prevCharacters) => [...(prevCharacters || []), ...newCharacters]);
        setPage(page + 1);
      })
      .catch((error) => {
        console.error("Error loading more characters:", error);
        toast.error("Error loading characters")
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
