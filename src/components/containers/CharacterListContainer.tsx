// Hooks
import { useEffect, useState, useContext } from "react";

// Types
import { CharacterResponseFromApi } from "../../types";

// Components
import CharacterListView from "../views/CharacterListView";

// Context
import { CharactersContext } from "../../api/context/CharactersProvider";


const CharacterListContainer = () => {
  // State
  const [characters, setCharacters] = useState<Array<CharacterResponseFromApi>>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);

  // Context
  const charactersContext = useContext(CharactersContext);

  useEffect(() => {
    // Check if charactersContext exist
    if (charactersContext && charactersContext.allCharacters) {
      setCharacters(charactersContext.allCharacters);
    }
  }, [charactersContext]);

  if (characters.length > 0) {
    return <CharacterListView data={characters} />;
  }
  return <p>Loading...</p>;
};

export default CharacterListContainer;
