// Hooks
import { useEffect, useState, useContext } from "react";

// Types
import { CharacterResponseFromApi } from "../../types";

// Services
import { getAllCharacters } from "../../api/services/getAllCharacters";

// Components
import CharacterListView from "../views/CharacterListView";

// Context
import { CharactersContext } from "../../api/context/CharactersProvider";


const CharacterListContainer = () => {
  // State
  const [characters, setCharacters] = useState<Array<CharacterResponseFromApi>>([]);
  const [page, setPage] = useState(1);

  // Context
  const charactersContext = useContext(CharactersContext);

  useEffect(() => {
    // Check if charactersContext exist
    if (charactersContext && charactersContext.allCharacters) {
      setCharacters(charactersContext.allCharacters);
    }
  }, [charactersContext]);

  // Actions
  const loadMoreCharacters = ():void => {
    const nextPage = `https://rickandmortyapi.com/api/character?page=${page + 1}`;
    
    getAllCharacters(nextPage)
      .then((newCharacters) => {
        setCharacters([...characters, ...newCharacters]);
        setPage(page + 1);
      })
      .catch((error) => {
        console.error("Error loading more characters:", error);
      });
  };


  // Render
  if (characters.length > 0) {
    return <CharacterListView data={characters} loadMoreCharacters={loadMoreCharacters} />;
  }
  return <p>Loading...</p>;
};

export default CharacterListContainer;
