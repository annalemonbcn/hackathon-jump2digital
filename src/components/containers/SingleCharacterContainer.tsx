// Hooks
import { useEffect, useState } from "react";

// Types
import { Character } from "../../types";
import SingleCharacterView from "../views/SingleCharacterView";

// FAKE DATA
const INITIAL_STATE = {
  id: -1,
  name: "Rick",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth (C-137)",
    url: "",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  url: "https://rickandmortyapi.com/api/character/1"
}

const SingleCharacterContainer = () => {
  const [character, setCharacter] = useState<Character>(INITIAL_STATE);

  useEffect(() => {
    // setCharacter(INITIAL_STATE);
  }, [])
  
  // TODO: Fetch and set data single character
  return <SingleCharacterView data={character} />;
};

export default SingleCharacterContainer;
