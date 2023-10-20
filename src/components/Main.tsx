// Routing
import { Routes, Route } from "react-router-dom";

// Component<
import CharacterListContainer from "./containers/CharacterListContainer";
import SingleCharacterContainer from "./containers/SingleCharacterContainer";

const Main = () => {
  return (
    <main className="mt-10">
      <Routes>
        <Route path="/" element={<CharacterListContainer />} />
        <Route path="/id/:id" element={<SingleCharacterContainer />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </main>
  );
};

export default Main;
