// Router
import { useLocation } from "react-router-dom";

// Types
import { CharacterResponseFromApi } from "../../types";

// Router
import { Link } from "react-router-dom";

// Components
import AccordionBasic from "../utils/AccordionBasic";
import CarousselContainer from "../containers/CarousselContainer";

// MUI
import { Tooltip } from "@mui/material";
import { useEffect } from "react";

// Props
interface SingleCharacterViewProps {
  data: CharacterResponseFromApi;
}

const SingleCharacterView = ({ data }: SingleCharacterViewProps) => {
  let location = useLocation();

  useEffect(() => {
    // Scroll to top everytime the component renders
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-8 character mx-auto">
        <div className="w-full md:w-1/3 lg:max-w-[400px]">
          <p className="mb-4 py-2 px-3 rounded-md bg-grey-dark text-white text-center font-bold text-xl">
            <Tooltip title={data.status}>
              {data.status === "Alive" ? (
                <span>🟢</span>
              ) : data.status === "Dead" ? (
                <span>🔴</span>
              ) : (
                <span>❓</span>
              )}
            </Tooltip>
            {" "}{data.name}
          </p>
          <img className="w-full rounded-md border-2 border-amber-400" src={data.image} alt={data.name} />
        </div>
        <div className="w-full md:w-2/4 lg:w-1/3 relative">
          <div className="flex flex-col gap-2 bg-white p-4 rounded-md border-2 border-grey-dark">
            <p>
              &gt; <span className="font-bold">Gender: </span>
              {data.gender}
            </p>
            <p>
              &gt; <span className="font-bold">Origin: </span>
              {data.origin.name}
            </p>
            <p>
              &gt; <span className="font-bold">Location: </span>
              {data.location.name}
            </p>
            <p>
              &gt; <span className="font-bold">Species: </span>
              {data.species}
            </p>
            <p>
              &gt; <span className="font-bold">Status: </span>
              {data.status}
            </p>
            <p>
              &gt; <span className="font-bold">Type: </span>
              {data.type === "" ? "?" : data.type}
            </p>
          </div>
          <div className="mt-2 rounded-md border-2 border-grey-dark">
            <AccordionBasic data={data} />
          </div>
          <div className="mt-10 lg:mt-20 text-center md:text-right">
            <Link
              className="px-3 py-2 rounded bg-white border-2 border-amber-400"
              to="/"
            >
              ← Back to search
            </Link>
          </div>
        </div>
      </div>
      <CarousselContainer name={data.name} id={data.id} />
    </>
  );
};

export default SingleCharacterView;
