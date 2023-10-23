// Hooks
import { useEffect, useState } from "react";

// Types
import { Character } from "../../types";

// Components
import CharacterListView from "../views/CharacterListView";

// Services
import { getAllCharacters } from "../../services/getAllCharacters";


const CharacterListContainer = () => {
  const [characters, setCharacters] = useState<Array<Character>>([]);

  useEffect(() => {
    // Call the getAllCharacters method and set the processed response
    getAllCharacters()
      .then(setCharacters)
  }, []);

  return <CharacterListView data={characters} />;
};

export default CharacterListContainer;
