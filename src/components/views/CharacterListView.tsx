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
    <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 md:gap-8 md:gap-y-16 mt-20">
      {data.map((character) => {
        return (
          <Link
            to={`/id/${character.id}`}
            key={character.id}
            className="flex flex-col items-center border-4 border-amber-400 rounded-md bg-blue-soft p-6 md:p-4 xl:p-6 transform transition-transform scale-100 hover:scale-105"
          >
            <img
              className="border-4 border-amber-400 rounded-full h-auto w-min lg:w-3/4 -mt-14"
              src={character.image}
              alt={character.name}
            />
            <p className="mt-6 font-bold text-md text-center uppercase">{character.name}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default CharacterList;
