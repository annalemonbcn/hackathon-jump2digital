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
    if(!searchActive){
      charactersContext?.loadMoreCharacters();
    } else {
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
