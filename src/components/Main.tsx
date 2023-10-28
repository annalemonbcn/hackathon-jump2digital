// Routing
import { Routes, Route } from "react-router-dom";

// Components
import CharacterListContainer from "./containers/CharacterListContainer";
import SearchContainer from "./containers/SearchContainer";
import SingleCharacterContainer from "./containers/SingleCharacterContainer";

const Main = () => {
  return (
    <main className="mt-10 pb-20">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchContainer />
              <CharacterListContainer />
            </>
          }
        />
        <Route path="/id/:id" element={<SingleCharacterContainer />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </main>
  );
};

export default Main;
