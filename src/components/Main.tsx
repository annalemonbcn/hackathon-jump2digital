// Hooks
import { useEffect, useState } from "react";

// Types
import { Character } from "../types";

// Components
import CharacterList from "./CharacterList";

const INITIAL_STATE = [
  {
    id: -1,
    name: "Rick",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "",
    origin: {
      name: "Earth (C-137)",
      url: "",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    url: "",
  },
  {
    id: -1,
    name: "Rick",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: {
      name: "",
      url: "",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    url: "",
  },
  {
    id: -1,
    name: "Rick",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: {
      name: "",
      url: "",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    url: "",
  },
  {
    id: -1,
    name: "Rick",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: {
      name: "",
      url: "",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    url: "",
  },
  {
    id: -1,
    name: "Rick",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: {
      name: "",
      url: "",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    url: "",
  },
];

const Main = () => {
  const [characters, setCharacters] = useState<Array<Character>>([]);

  useEffect(() => {
    setCharacters(INITIAL_STATE);
  }, []);

  return (
    <main className="mt-10">
      <CharacterList data={characters} />
    </main>
  );
};

export default Main;
