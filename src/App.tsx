import React from "react";

// Router
import { BrowserRouter } from "react-router-dom";

// Components
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-main-green-dark min-h-screen pt-10 px-8 md:px-14 lg:px-20">
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
