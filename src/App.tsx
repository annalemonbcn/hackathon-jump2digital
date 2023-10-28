// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Toaster
import { Toaster } from 'sonner'


// Components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

// Provider
import CharactersProvider from "./api/context/CharactersProvider";

function App() {
  return (
    <BrowserRouter>
      <CharactersProvider>
        <div className="App bg-main-violet relative min-h-screen py-10 px-8 md:px-14 lg:px-20 text-grey-dark">
          <Toaster position="top-right" richColors />
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
      </CharactersProvider>
    </BrowserRouter>
  );
}

export default App;
