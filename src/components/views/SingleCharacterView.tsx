// Types
import { Character } from "../../types";

// Router
import { Link } from "react-router-dom";

interface SingleCharacterViewProps {
  data: Character;
}

const SingleCharacterView = ({ data }: SingleCharacterViewProps) => {
  console.log("data", data);

  return (
    <>
    <div>
      <button className="bg-blue-soft px-3 py-2 rounded">
        <Link to="/">← Back</Link>
      </button>
    </div>
    <div className=" w-full xs:max-w-[400px] flex flex-col items-center character mx-auto">
      <img className="rounded-full max-w-[65%]" src={data.image} alt={data.name} />
      <div className="w-full lg:w-3/4 bg-blue-soft mt-4 p-4 rounded-xl border-2 border-blue-dark">
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
    </>
  );
};

export default SingleCharacterView;
