// Router
import { useMatch, Link } from "react-router-dom";

const Header = () => {
  const match = useMatch("/id/:id");

  return (
    <header className="flex justify-center w-full header">
      <Link to="/" className="lg:w-3/4 max-w-[600px]">
        <img
          className={`${match ? "hidden" : "w-full"} `}
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
          alt="rick & morty logo"
        />
      </Link>
    </header>
  );
};

export default Header;
