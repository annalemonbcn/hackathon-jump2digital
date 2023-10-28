// Hooks
import { useState, useContext, useEffect } from "react";

// Toast
import { toast } from "sonner";

// MUI Icon
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

// Services
import { getAllCharactersByName } from "../../api/services/getCharactersByName";
import { getAllCharacters } from "../../api/services/getAllCharacters";

// Context
import { CharactersContext } from "../../api/context/CharactersProvider";
import { SearchContext } from "../../api/context/SearchProvider";

// Icon
import SearchIcon from "./svg/SearchIcon";


const SearchBar = () => {
  // State
  const [query, setQuery] = useState<string>("");
  const [buttonSearchText, setButtonSearchText] = useState<React.ReactNode>();


  // Context
  const charactersContext = useContext(CharactersContext);
  const searchContext = useContext(SearchContext);

  useEffect(() => {
    // Set search state to false everytime query.length === 0 so the "Load more" button can appear
    if(query.length === 0){
      searchContext?.setSearchState(false)
    }
  }, [query])
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Set searchActive state to true
    searchContext?.setSearchState(true);

    // Query
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

  const handleResetClick = () => {
    getAllCharacters("https://rickandmortyapi.com/api/character")
      .then((characters) => {
        // Set allCharacters to state
        charactersContext?.setAllCharacters(characters);
        // Reset query
        setQuery("")
      })
      .catch((error) => {
        console.error("Error loading characters:", error);
        toast.error("Error loading characters");
      });
  };

  return (
    <div className="w-full lg:w-3/4 mx-auto flex items-center relative searchbar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Type to search"
        className="w-full h-10 pl-12 py-4 bg-white rounded-md text-sm lg:text-base focus:border-[3px] focus:border-amber-400 focus:outline-0"
      />
      <button
        onClick={handleResetClick}
        className={`absolute top-0 right-0 h-10 py-2 px-4 text-sm ${query.length === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
        disabled={query.length === 0}
      >
        <HighlightOffIcon />
      </button>
      <SearchIcon />
    </div>
  );
};

export default SearchBar;
