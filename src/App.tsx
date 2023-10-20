import React from "react";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <div className="App bg-main-green-dark min-h-screen pt-10 px-8 md:px-14 lg:px-20">
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
