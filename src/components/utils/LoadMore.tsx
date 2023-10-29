// Hooks
import { useContext } from "react";

// Context
import { CharactersContext } from "../../api/context/CharactersProvider";
import { SearchContext } from "../../api/context/SearchProvider";

interface LoadMoreProps {
  searchActive: boolean | undefined;
}

const LoadMore = ({ searchActive }: LoadMoreProps) => {
  console.log("searchActive", searchActive);
  // Context
  const charactersContext = useContext(CharactersContext);
  const searchContext = useContext(SearchContext);

  const handleLoad = (): void => {
    // Check if searchbar is being used or not
    if(!searchActive){
      // If searchbar is not used, load more characters from characters api endpoint
      charactersContext?.loadMoreCharacters();
    } else {
      // If searchbar is used, load more characters from name and query api endpoint
      searchContext?.loadMoreCharactersByNameAndPage()
    }
  };

  return (
    <div className="mt-8 text-center">
      <button
        className="px-3 py-2 rounded bg-white border-2 border-amber-400"
        onClick={handleLoad}
      >
        Load 20 more
      </button>
    </div>
  );
};

export default LoadMore;
