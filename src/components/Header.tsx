import React from "react";

const Header = () => {
  return (
    <header className="flex justify-center w-full header">
      <img
        className="w-full lg:w-3/4 max-w-[600px]"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
        alt="rick & morty logo"
      />
    </header>
  );
};

export default Header;
