// Hooks
import { useState, useContext } from "react";

// Toast
import { toast } from "sonner";

// Services
import { getAllCharactersByName } from "../../api/services/getCharactersByName";

// Context
import { CharactersContext } from "../../api/context/CharactersProvider";

// Icon
import SearchIcon from "./svg/SearchIcon";

const SearchBar = () => {
  // State
  const [query, setQuery] = useState<string>("");

  // Context
  const charactersContext = useContext(CharactersContext);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);

    // Fetch request to the api
    getAllCharactersByName(newQuery)
      .then((searchResults) => {
        // Set the searchResults if allCharacters exist
        charactersContext?.setAllCharacters(searchResults);
      })
      .catch((error) => {
        console.error("Error getting results: " + error);
        toast.message("No results matched your search", {
          style: {
            background: "moccasin",
          },
        });
        charactersContext?.setAllCharacters([]);
      });
  };

  return (
    <div className="w-full lg:w-3/4 mx-auto flex items-center relative searchbar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Type to search a character"
        className="w-full h-10 pl-12 py-4 bg-white rounded-md text-sm lg:text-base focus:border-[3px] focus:border-amber-400 focus:outline-0"
      />
      <SearchIcon />
    </div>
  );
};

export default SearchBar;
