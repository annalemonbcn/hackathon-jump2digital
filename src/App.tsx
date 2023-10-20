import React from 'react';

// Components
import Header from './components/Header';
import Main from './components/Main';


function App() {
  return (
    <div className="App bg-main-green-dark min-h-screen pt-10 px-8 md:px-14 lg:px-20">
     <Header />
     <Main />
    </div>
  );
}

export default App;
