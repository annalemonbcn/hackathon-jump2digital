import { useEffect, useState } from "react";
import { Character } from "../types";
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
    <div className="mt-10 main">
      <h1 className="text-2xl font-custom font-bold title">Characters list:</h1>
      <CharacterList data={characters} />
    </div>
  );
};

export default Main;
