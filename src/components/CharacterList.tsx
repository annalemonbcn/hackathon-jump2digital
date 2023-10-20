import React from "react";
import { Character } from "../types";

interface CharacterListProps {
  data: Array<Character>;
}

const CharacterList = ({ data }: CharacterListProps) => {
  return (
    <ul className="grid lg:grid-cols-4 gap-12 mt-12">
      {data.map((character) => {
        return (
          <li
            key={character.id}
            className="flex flex-col items-center border-4 border-amber-400 rounded-md bg-main-green py-6"
          >
            <img
              className="rounded-full h-auto w-1/2 -mt-12"
              src={character.image}
              alt={character.name}
            />
            <div className="mt-4 flex flex-col items-center">
              <p className="font-bold">{character.name}</p>
              <p>
                {character.status === 'Alive' ? "🟢" : "🔴"} {character.species}</p>
              <p>Origin: {character.origin.name}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CharacterList;
