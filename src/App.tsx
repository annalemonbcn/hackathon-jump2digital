import React from "react";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SingleCharacterContainer from "./components/containers/SingleCharacterContainer";

// Provider
import CharactersProvider from "./api/context/CharactersProvider";

function App() {
  return (
    <BrowserRouter>
      <CharactersProvider>
        <div className="App bg-main-violet relative min-h-screen pt-10 px-8 md:px-14 lg:px-20">
          <Routes>
            <Route
              path="/*"
              element={
                <>
                  <Header />
                  <Main />
                  <Footer />
                </>
              }
            />
            <Route path="/id/:id" element={<SingleCharacterContainer />} />
          </Routes>
        </div>
      </CharactersProvider>
    </BrowserRouter>
  );
}

export default App;
