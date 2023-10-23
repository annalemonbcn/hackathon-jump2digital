// Hooks
import { useState, useContext } from "react";

// Services
import { getAllCharactersByName } from "../../api/services/getCharactersByName";

// Context
import { CharactersContext } from "../../api/context/CharactersProvider";


const SearchBar = () => {
  // State
  const [query, setQuery] = useState<string>("");

  // Context
  const charactersContext = useContext(CharactersContext);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    getAllCharactersByName(newQuery)
      .then((searchResults) => {
        // Check if charactersContext exist
        if(charactersContext) {
          charactersContext.setAllCharacters(searchResults);
        }
      })
      .catch((error) => {
        console.error("Error fetching data: " + error);
        if(charactersContext) {
          charactersContext.setAllCharacters([]);
          // TODO: gestionar loading vs array buit
        }
      });
  };


  return (
    <div className="w-full lg:w-3/4 mx-auto flex items-center relative searchbar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Type to search a character"
        className="w-full h-10 p-2 bg-white rounded-md text-sm lg:text-base"
      />
      <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 absolute right-3 top-2 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11 18a7 7 0 100-14 7 7 0 000 14z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20 20l-4-4"
      />
    </svg>
    </div>
  );
};

export default SearchBar;
