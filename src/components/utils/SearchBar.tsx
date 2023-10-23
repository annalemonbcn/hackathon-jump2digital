// Hooks
import { useEffect, useState } from "react";

// Services
import { getAllCharactersByName } from "../../api/services/getCharactersByName";

// Types
import { Character } from "../../types";


const SearchBar = () => {
  // State
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [characters, setCharacters] = useState<Array<Character>>([]);

  useEffect(() => {
    if (searchTerm) {
      console.log('characters', characters)
    }
  }, [characters])
  

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    getAllCharactersByName(searchTerm).then(setCharacters);
  };


  return (
    <div className="searchbar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Type to search a character"
      />
    </div>
  );
};

export default SearchBar;
