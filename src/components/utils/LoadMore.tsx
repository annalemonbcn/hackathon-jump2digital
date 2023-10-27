import React from "react";

const LoadMore = () => {

  const handleLoad = ():void => {
    console.log("load more")
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
