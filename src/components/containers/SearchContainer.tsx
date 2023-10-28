// Components
import SearchBar from "../utils/SearchBar";

// Props
interface SearchContainerProps {
  onSearch: () => void
}

const SearchContainer = () => {
  return (
    <>
      <div className="text-white my-8 mx-auto text-center lg:text-xl lg:w-3/4">
        <p>
          Enter a character to access detailed information instantly, or simply
          scroll down and explore.
        </p>
        <p>Start your adventure now! 🚀</p>
      </div>
      <SearchBar />
    </>
  );
};

export default SearchContainer;
