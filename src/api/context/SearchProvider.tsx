// Hooks
import React, { createContext, useState, ReactNode } from "react";


// Props types
interface SearchContextProps {
  searchActive: boolean;
  searchbarClicked: () => void;
}

interface SearchProviderProps {
  children: ReactNode;
}

// Create Context
export const SearchContext = createContext<SearchContextProps | undefined>(
  undefined
);

const SearchProvider = (props: SearchProviderProps) => {
  // State
  const [searchActive, setSearchActive] = useState<boolean>(false);

  // Actions
  const searchbarClicked = () => {
    console.log("searchbar clicked");
    setSearchActive(true);
  };

  // Provider value
  const searchContextValue: SearchContextProps = {
    searchActive,
    searchbarClicked
  };

  return (
    <SearchContext.Provider value={searchContextValue}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
