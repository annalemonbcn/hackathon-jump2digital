// Hooks
import { useContext } from "react";

// Context
import { CharactersContext } from "../../api/context/CharactersProvider";

const LoadMore = () => {

  // Context
  const charactersContext = useContext(CharactersContext);

  const handleLoad = ():void => {
    charactersContext?.loadMoreCharacters();
  }

  return (
    <div className="mt-8 text-center">
    <button className="px-3 py-2 rounded bg-white border-2 border-amber-400"
      onClick={handleLoad}>
      Load 20 more
    </button>
    </div>
  );
};

export default LoadMore;
