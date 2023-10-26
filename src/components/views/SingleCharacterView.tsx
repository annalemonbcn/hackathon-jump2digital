// Types
import { CharacterResponseFromApi } from "../../types";

// Router
import { Link } from "react-router-dom";

interface SingleCharacterViewProps {
  data: CharacterResponseFromApi;
}

const SingleCharacterView = ({ data }: SingleCharacterViewProps) => {
  console.log("data", data);
  return (
    // Option 1
    // <div
    //   className="h-screen bg-cover bg-center absolute left-0 top-0 w-full"
    //   style={{
    //     backgroundImage:
    //       "url('https://static.posters.cz/image/1300/art-photo/rick-and-morty-space-i115643.jpg')",
    //   }}
    // >
    //   <div>
    //     <button className="bg-blue-soft px-3 py-2 rounded">
    //       <Link to="/">← Back</Link>
    //     </button>
    //   </div>
    //   <div className=" w-full xs:max-w-[400px] flex flex-col items-center character mx-auto">
    //     <img
    //       className="rounded-full max-w-[65%]"
    //       src={data.image}
    //       alt={data.name}
    //     />
    //     <div className="w-full lg:w-3/4 bg-blue-soft mt-4 p-4 rounded-xl border-2 border-blue-dark">
    //       <p className="bg-violet-soft py-2 px-3 rounded-xl text-white text-center font-bold text-xl">
    //         {data.name}
    //       </p>
    //       <p className="mt-3">
    //         {data.gender === "Male" ? "♂️" : "♀️"} {data.gender}
    //       </p>
    //       <p>
    //         <span className="font-bold">Origin: </span>
    //         {data.origin.name}
    //       </p>
    //       <p>
    //         <span className="font-bold">Species: </span>
    //         {data.species}
    //       </p>
    //       <p>
    //         {data.status === "Alive" ? "🟢" : "🔴"} {data.status}
    //       </p>
    //     </div>
    //   </div>
    // </div>

    // Option 2
    <>
      <div
        className="h-screen w-full bg-cover bg-center blur-sm absolute left-0 top-0"
        style={{
          backgroundImage:
            // "url('https://static.posters.cz/image/1300/art-photo/rick-and-morty-space-i115643.jpg')",
            "url('https://i.redd.it/qt1axtc1t4k21.png')",
        }}
      ></div>

      {/* Button */}
      <div className="relative z-10">
        <Link className="bg-main-violet px-3 py-2 rounded" to="/">
          ← Back
        </Link>
      </div>

      <div className="w-full flex items-start justify-center gap-8 character mt-10 mx-auto relative z-10">
        <div className="max-w-[65%]">
          <p className="mb-4 py-2 px-3 rounded-md bg-grey-dark text-white text-center font-bold text-xl">
            {data.status === "Alive" ? "🟢" : "🔴"} {data.name} -{" "}
            {data.gender === "Male" ? "♂️" : "♀️"}
          </p>
          <img className="w-full rounded-md" src={data.image} alt={data.name} />
        </div>

        <div className="w-1/3 max-w-[500px] flex flex-col gap-2  bg-white p-4 rounded-md border-2 border-blue-dark">
          <p>
            <span className="font-bold">Origin: </span>
            {data.origin.name}
          </p>
          <p>
            <span className="font-bold">Location: </span>
            {data.location.name}
          </p>
          <p>
            <span className="font-bold">Species: </span>
            {data.species}
          </p>
          <p>
            <span className="font-bold">Status: </span>
            {data.status}
          </p>
          <p>
            <span className="font-bold">Type: </span>
            {data.type === "" ? "?" : data.type}
          </p>
          <div>
            <p className="font-bold">Episodes list:</p>
            <ul>
              {data.episode.map((episodeUrl, index) => {
                const episodeNumber = episodeUrl.split("/").pop();
                return <li key={index}>{episodeNumber}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCharacterView;
