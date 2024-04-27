import { useContext, useEffect } from "react";
import "./css/Sidebar.css";
import { Game } from "../store/Game-Context";
import { Link, useNavigate } from "react-router-dom";
import { last30days, nextweek, thisweek } from "../services/Dates";


function Sidebar() {
  const { updateData } = useContext(Game);
  const navigate = useNavigate();


  function selectRelease(id) {
    updateData({
      dates: id,
    });
  }

  function selectPlatform(id) {
    updateData({
      platforms: id,
    });
  }

  function selectGener(id) {
    updateData({
      genres: id,
    });
  }

  const handleClick = (specificFunction, ...args) => {
    if (window.location.pathname !== "/") {
      navigate("/");
    }
    specificFunction(...args);
  };

  


  return (
    <>
      <div className="snb-sidebar">
        <div className="snb-head">
          <Link
            className="snb-a"
            onClick={() => handleClick(selectRelease, last30days())}
          >
            Last 30days
          </Link>
          <Link
            className="snb-a"
            onClick={() => handleClick(selectRelease, thisweek())}
          >
            This Week
          </Link>
          <Link
            className="snb-a"
            onClick={() => handleClick(selectRelease, nextweek())}
          >
            Next Week
          </Link>
        </div>
        <div className="snb-head">
          Top
          <Link
            className="snb-a"
            onClick={() => handleClick(selectRelease, "2023-02-12,2024-02-12")}
          >
            Best of Year
          </Link>
          <Link
            className="snb-a"
            onClick={() => handleClick(selectRelease, "2023-01-01,2023-12-31")}
          >
            Popular in 2023
          </Link>
      
        </div>
        <div className="snb-head">
          Platform
          <Link
            className="snb-a"
            onClick={() => handleClick(selectPlatform, 4)}
          >
            PC
          </Link>
          <Link
            className="snb-a"
            onClick={() => handleClick(selectPlatform, 16, 18, 187)}
          >
            Playstation
          </Link>
          <Link
            className="snb-a"
            onClick={() => handleClick(selectPlatform, 1, 186)}
          >
            Xbox
          </Link>
          <Link
            className="snb-a"
            onClick={() => handleClick(selectPlatform, 7)}
          >
            Nintendo Switch
          </Link>
          <Link
            className="snb-a"
            onClick={() => handleClick(selectPlatform, 3)}
          >
            IOS
          </Link>
          <Link
            className="snb-a"
            onClick={() => handleClick(selectPlatform, 21)}
          >
            Android
          </Link>
          <Link
            className="snb-a"
            onClick={() => handleClick(selectPlatform, 6)}
          >
            Linux
          </Link>
          <Link
            className="snb-a"
            onClick={() => handleClick(selectPlatform, 5)}
          >
            MacOS
          </Link>
        </div>
        <div className="snb-head">
          Genres
          <Link className="snb-a" onClick={() => handleClick(selectGener, 4)}>
            Action
          </Link>
          <Link className="snb-a" onClick={() => handleClick(selectGener, 3)}>
            Adventure
          </Link>
          <Link className="snb-a" onClick={() => handleClick(selectGener, 6)}>
            Fighting
          </Link>
          <Link className="snb-a" onClick={() => handleClick(selectGener, 5)}>
            RPG
          </Link>
          <Link className="snb-a" onClick={() => handleClick(selectGener, 7)}>
            Puzzle
          </Link>
          <Link className="snb-a" onClick={() => handleClick(selectGener, 1)}>
            Racing
          </Link>
          <Link className="snb-a" onClick={() => handleClick(selectGener, 2)}>
            Shooter
          </Link>
          <Link className="snb-a" onClick={() => handleClick(selectGener, 10)}>
            Strategy
          </Link>
          <Link className="snb-a" onClick={() => handleClick(selectGener, 15)}>
            Sports
          </Link>
        </div>
      </div>
    </>
  );
}

export { Sidebar };
