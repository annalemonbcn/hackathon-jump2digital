import React from "react";

// Types
import { Character } from "../../types";

// Router
import { Link } from "react-router-dom";

// Props
interface CharacterListProps {
  data: Array<Character>;
}

const CharacterList = ({ data }: CharacterListProps) => {
  return (
    <>
      <h1 className="text-2xl font-custom font-bold title text-center lg:text-left">Characters list:</h1>
      <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 lg:gap-8 mt-12">
        {data.map((character) => {
          return (
            <Link
              to={`/id/${character.id}`}
              key={character.id}
              className="flex flex-col items-center border-4 border-amber-400 rounded-md bg-main-green p-6"
            >
              <img
                className="rounded-full h-auto w-1/2 -mt-12"
                src={character.image}
                alt={character.name}
              />
              <div className="mt-4 flex flex-col">
                <p className="font-bold text-center">{character.name}</p>
                <p>
                  {character.status === "Alive" ? "🟢" : "🔴"}{" "}
                  {character.species}
                </p>
                <p>
                  <span className="font-bold">Origin: </span>
                  Origin: {character.origin.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default CharacterList;
