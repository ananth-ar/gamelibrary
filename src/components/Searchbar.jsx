import { useContext, useState } from "react";
import { Game } from "../store/Game-Context";
import "./css/Searchbar.css";
import { Link } from "react-router-dom";

function Searchbar() {
  const [inputValue, setInputValue] = useState("");
  const { updateData } = useContext(Game);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    updateData({
      search: inputValue,
    });
  };

  return (
    <>
      <div className="sb-bar1">
        <Link to="/" onClick={() => nothin()} className="sb-a">
          HELLO!
        </Link>
        <input
          className="sb-input"
          placeholder="search games here..."
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        <button className="sb-btn" onClick={() => handleSearch()}>
          Search
        </button>
      </div>
    </>
  );
}

export { Searchbar };
