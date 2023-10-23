// Routing
import { Routes, Route } from "react-router-dom";

// Component<
import CharacterListContainer from "./containers/CharacterListContainer";
import SearchBar from "./utils/SearchBar";

const Main = () => {
  return (
    <main className="mt-10 pb-20">
      <SearchBar />
      <Routes>
        <Route path="/" element={<CharacterListContainer />} />
        
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </main>
  );
};

export default Main;
