// Hooks
import { useEffect, useState } from "react";

// Router
import { useParams } from "react-router-dom";

// Types
import { Character } from "../../types";

// Services
import { getSingleCharacter } from "../../api/services/getSingleCharacter";

// Components
import SingleCharacterView from "../views/SingleCharacterView";

const SingleCharacterContainer = () => {
  // State
  const [character, setCharacter] = useState<Character | null>(null);

  // Params
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleCharacter(id)
        .then(setCharacter);
        // TODO: catch!
    }
  }, [id]);

  // Render
  if(character){
    return <SingleCharacterView data={character} />;
  }
  return <p>Loading...</p>;
};

export default SingleCharacterContainer;
