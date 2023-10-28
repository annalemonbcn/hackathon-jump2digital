// Hooks
import { useEffect, useState } from "react";

// Toast
import { toast } from "sonner";

// Router
import { useParams } from "react-router-dom";

// Types
import { CharacterResponseFromApi } from "../../types";

// Services
import { getSingleCharacter } from "../../api/services/getSingleCharacter";

// Components
import SingleCharacterView from "../views/SingleCharacterView";
import Loader from "../utils/Loader";

const SingleCharacterContainer = () => {
  // State
  const [character, setCharacter] = useState<CharacterResponseFromApi | null>(
    null
  );

  // Params
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      // Fetch data from api
      getSingleCharacter(id)
        .then(setCharacter)
        .catch((error) => {
          console.error("Error loading the character", error);
          toast.error("Error loading the character");
        });
    }
  }, [id]);

  // Render
  if (character) {
    return <SingleCharacterView data={character} />;
  }
  return <Loader />;
};

export default SingleCharacterContainer;
