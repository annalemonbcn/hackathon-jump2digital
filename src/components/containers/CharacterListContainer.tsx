// Hooks
import { useEffect, useState } from "react";

// Types
import { Character } from "../../types";

// Components
import CharacterListView from "../views/CharacterListView";

// Services
import { getAllCharacters } from "../../api/services/getAllCharacters";

const CharacterListContainer = () => {
  const [characters, setCharacters] = useState<Array<Character>>([]);

  useEffect(() => {
    // Call the getAllCharacters method and set the processed response
    getAllCharacters().then(setCharacters);
    // TODO: catch!
  }, []);

  if (characters) {
    return <CharacterListView data={characters} />;
  }
  return <p>Loading...</p>;
};

export default CharacterListContainer;
