import React from "react";

interface LoadMoreProps {
  loadMoreCharacters: () => void
}

const LoadMore = ({ loadMoreCharacters }: LoadMoreProps) => {

  const handleLoad = ():void => {
    console.log("load more")
    loadMoreCharacters();
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
