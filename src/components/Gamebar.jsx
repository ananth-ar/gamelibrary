import { useContext, useEffect } from "react";
import { useState } from "react";
import "./css/Gamebar.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Game } from "../store/Game-Context";

function Gamebar({
  coverimgurl,
  gameName,
  releasedate,
  rating,
  genres,
  platforms,
  onNameClick,
  id,
  slug,
}) {
  const { updateData, setId } = useContext(Game);

  function selectGener(id) {
    updateData({
      genres: id,
    });
  }

 

  function renderPlatform(item, index) {
    if (item.platform.slug === "pc") {
      return (
        <div key={index} className="gb-i">
          <img className="gb-icon" src="src\components\img\icons\pc.svg"></img>
        </div>
      );
    } else if (item.platform.slug === "playstation4") {
      return (
        <div key={index} className="gb-i">
          <img
            className="gb-icon"
            src='src\components\img\icons\playstation.svg'
          ></img>
        </div>
      );
    } else if (item.platform.slug === "playstation5") {
      return (
        <div key={index} className="gb-i">
          <img
            className="gb-icon"
            src="src\components\img\icons\gaming-remote.svg"
          ></img>
        </div>
      );
    } else if (item.platform.slug === "xbox-one") {
      return (
        <div key={index} className="gb-i">
          <img
            className="gb-icon"
            src="src\components\img\icons\xbox.svg"
          ></img>
        </div>
      );
    } else if (item.platform.slug === "nintendo-switch") {
      return (
        <div key={index} className="gb-i">
          <img
            className="gb-icon"
            src="src\components\img\icons\nitindo.svg"
          ></img>
        </div>
      );
    } else if (item.platform.slug === "ios") {
      return (
        <div key={index} className="gb-i">
          <img
            className="gb-icon"
            src="src\components\img\icons\appleiphone.svg"
          ></img>
        </div>
      );
    } else if (item.platform.slug === "android") {
      return (
        <div key={index} className="gb-i">
          <img
            className="gb-icon"
            src="src\components\img\icons\android.svg"
          ></img>
        </div>
      );
    } else if (item.platform.slug === "linux") {
      return (
        <div key={index} className="gb-i">
          <img
            className="gb-icon"
            src="src\components\img\icons\linex.svg"
          ></img>
        </div>
      );
    } else if (item.platform.slug === "macos") {
      return (
        <div key={index} className="gb-i">
          <img
            className="gb-icon"
            src="src\components\img\icons\appleicon.svg"
          ></img>
        </div>
      );
    }
  }

  return (
    <>
      <div className="gb-gamebar">
        <div className="gb-img">
          <img className="gb-cover-img" src={coverimgurl} alt="" />
        </div>
        <div className="gb-details">
          <div className="gb-name">
            <div className="gb-grid">
              {platforms.map((item, index) => renderPlatform(item, index))}
            </div>
            <Link
              to={`/${slug}`}
              className="gb-gamename"
              onClick={() => console.log(slug)}
              href="#"
            >
              {gameName}
            </Link>
          </div>
        </div>
        <div className="gb-dropdown-content">
          <div className="gb-flex">
            <div className="gb-dpd-name">release date</div>
            <div>{releasedate}</div>
          </div>
          <div className="gb-flex">
            <div className="gb-dpd-name">rating</div>
            <div>
              <div>{rating}</div>
            </div>
          </div>
          <div className="gb-flex">
            <div className="gb-dpd-name">genres</div>
            <div>
              {genres.map((item, index) => (
                <a
                  key={index}
                  className="gb-dpd-a"
                  onClick={() => selectGener(item.id)}
                  href="#"
                >
                  {item.slug}
                </a>
              ))}
            </div>
          </div>
          <button className="gb-btn">show</button>
        </div>
      </div>
    </>
  );
}

export { Gamebar };
