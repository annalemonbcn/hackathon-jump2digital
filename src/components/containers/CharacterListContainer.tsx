// Hooks
import { useEffect, useState } from "react";

// Routing
import { Routes, Route } from "react-router-dom";

// Types
import { Character } from "../../types";

// Components
import CharacterListView from "../views/CharacterListView";

// FAKE DATA
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


const CharacterListContainer = () => {
  const [characters, setCharacters] = useState<Array<Character>>([]);

  useEffect(() => {
    setCharacters(INITIAL_STATE);
  }, []);
  return (
    <CharacterListView data={characters} />
  )
}

export default CharacterListContainer
