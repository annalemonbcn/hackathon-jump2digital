// Types
import { Character } from "../../types";

interface SingleCharacterViewProps {
  data: Character;
}

const SingleCharacterView = ({ data }: SingleCharacterViewProps) => {
  console.log("data", data);

  return (
    <div className="character w-full flex flex-col items-center">
      <img className="rounded-full max-w-[65%]" src={data.image} alt={data.name} />
      <div className="w-full bg-blue-soft mt-4 p-4 rounded-xl border-2 border-blue-dark">
        <p className="bg-violet-soft py-2 px-3 rounded-xl text-white text-center font-bold text-xl">
          {data.name}
        </p>
        <p className="mt-3">{data.gender === 'Male' ? '♂️' : '♀️'} {data.gender}</p>
        <p>
          <span className="font-bold">Origin: </span>
          {data.origin.name}
        </p>
        <p>
          <span className="font-bold">Species: </span>
          {data.species}
          </p>
        <p>{data.status === 'Alive' ? '🟢' : '🔴'} {data.status}</p>
      </div>
    </div>
  );
};

export default SingleCharacterView;
