// Types
import { Character } from "../../types";

// Router
import { Link } from "react-router-dom";

// Components
import SearchBar from "../utils/SearchBar";

// Props
interface CharacterListProps {
  data: Array<Character>;
}

const CharacterList = ({ data }: CharacterListProps) => {
  return (
    <>
      <h1 className="text-2xl font-custom font-bold title text-center lg:text-left">Characters list:</h1>
      <SearchBar />
      <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 md:gap-8 md:gap-y-16 mt-12">
        {data.map((character) => {
          return (
            <Link
              to={`/id/${character.id}`}
              key={character.id}
              className="flex flex-col items-center border-4 border-amber-400 rounded-md bg-blue-soft p-6 md:p-4 xl:p-6"
            >
              <img
                className="rounded-full h-auto w-min lg:w-3/4 -mt-14"
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
                  {character.origin.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default CharacterList;
