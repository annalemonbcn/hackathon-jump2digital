// Routing
import { Routes, Route } from "react-router-dom";

// Component<
import CharacterListContainer from "./containers/CharacterListContainer";
import SearchContainer from "./containers/SearchContainer";
import LoadMore from "./utils/LoadMore";

const Main = () => {
  return (
    <main className="mt-10 pb-20">
      <SearchContainer />
      <Routes>
        <Route path="/" element={<CharacterListContainer />} />
        
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      <LoadMore />
    </main>
  );
};

export default Main;
