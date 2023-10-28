// Hooks
import React, { createContext, useState, ReactNode } from "react";


// Props types
interface SearchContextProps {
  searchActive: boolean;
  setSearchState: (bool: boolean) => void;
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
  const setSearchState = (bool: boolean) => {
    setSearchActive(bool);
  };

  // Provider value
  const searchContextValue: SearchContextProps = {
    searchActive,
    setSearchState
  };

  return (
    <SearchContext.Provider value={searchContextValue}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
