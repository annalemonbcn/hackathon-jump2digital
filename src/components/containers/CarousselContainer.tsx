// Hooks
import React, { useEffect, useState } from "react";

// Components
import CarousselView from "../views/CarousselView";

// Types
import { CharacterResponseFromApi } from "../../types";

// Services
import { getAllCharactersByName } from "../../api/services/getCharactersByName";

// Props
interface CarousselContainerProps {
  name: string;
  id: number;
}

const CarousselContainer = (props: CarousselContainerProps) => {
  // State
  const [relatedChars, setRelatedChars] = useState<CharacterResponseFromApi[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const query = props.name.split(" ");
    // Fetch data from api
    getAllCharactersByName(query[0])
      .then((searchCharacters) => {
        // Exclude the actual character from the render
        const auxSearchCharacters = searchCharacters.filter(
          (obj) => obj.id !== props.id
        );
        setRelatedChars(auxSearchCharacters);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading related characters", error);
        setLoading(false);
      });
  }, [props.name]);

  return (
    <div className="mt-10 p-4 border-4 border-amber-400 rounded-md bg-blue-soft">
      <h1 className="text-xl font-bold">Related characters:</h1>
      {!loading ? (
        relatedChars.length === 0 ? (
          <p>No more related characters.</p>
        ) : (
          <CarousselView data={relatedChars} />
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CarousselContainer;
