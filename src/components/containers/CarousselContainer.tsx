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
    // Fetch data
    getAllCharactersByName(query[0])
      .then((searchCharacters) => {
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
    <div className="max-w-[85%] mx-auto">
      <h1 className="font-2xl font-bold mt-10">Related characters:</h1>
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
