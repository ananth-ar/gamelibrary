import "./css/Gamepage.css";
import { Link } from "react-router-dom";

function Gamepage({ gamedetials, slug }) {
  const platformArray = gamedetials.details.platforms;
  const videoResult = gamedetials.movies.results[0];

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

  function selectTags(id) {
    updateData({
      tags: id,
    });
  }

  const storesobj = {
    1: "Steam",
    2: "Microsoft Store",
    3: "PlayStation Store",
    4: "Apple Store",
    5: "GOG",
    6: "Nintendo Store",
    7: "Xbox 360 Store",
    8: "Google Play",
    9: "itch.io",
    11: "Epic Games",
  };

  const RenderStoreId = ({ results }) => {
    return results.map((item, index) => {
      if (item.store_id in storesobj) {
        return (
          <button
            onClick={() => {
              window.location = item.url;
            }}
            key={index}
            className="gp-wtb-btn"
          >
            {storesobj[item.store_id]}
          </button>
        );
      }
    });
  };


  return (
    <>
      <div className="gp0">
        <div className="gp">
          <h1 className="gp-heading">{gamedetials.details.name}</h1>

          <div className="gp-wtb">
            <h4 className="gp-wtb-h">where to buy</h4>
            <div className="gp-wtb-gridcontainer">
              <RenderStoreId results={gamedetials.stores.results} />
            </div>
          </div>

          <div className="gp-media">
            <div className="gp-mediacontainer1">
              <div>
                {videoResult ? (
                  <video
                    className="gp-media-video"
                    controls
                    width="400"
                    poster={videoResult.preview}
                  >
                    <source src={videoResult.data.max} />
                  </video>
                ) : (
                  <p>No playback available</p>
                )}
              </div>
              <div className="gp-mediacontainer12">
                
                <div>
                  <img
                    className="gp-mediaimg"
                    src={gamedetials.screenshots.results[0].image}
                    alt="no img"
                  />
                </div>
                <div>
                  {" "}
                  <img
                    className="gp-mediaimg"
                    src={gamedetials.screenshots.results[1].image}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="gp-mediacontainer2">
              <div>
                {" "}
                <img
                  className="gp-mediaimg"
                  src={gamedetials.screenshots.results[2].image}
                  alt=""
                />
              </div>
              <div>
                {" "}
                <img
                  className="gp-mediaimg"
                  src={gamedetials.screenshots.results[3].image}
                  alt=""
                />
              </div>
              <div>
                {" "}
                <img
                  className="gp-mediaimg"
                  src={gamedetials.screenshots.results[4].image}
                  alt=""
                />
              </div>
            </div>
            <Link to={`/${slug}/image`}>see more...</Link>
          </div>
          <h3 style={{ margin: "5px 0" }}>About </h3>
          <p style={{ margin: 0 }}>{gamedetials.details.description_raw} </p>
          <div className="gp-flexcontainer">
            <div className="gp-flexbox">
              <div className="gp-l-platform"></div>
              <h4 className="gp-l-platform-h">release</h4>
              <p style={{ margin: 0 }} href="">
                {gamedetials.details.released}
              </p>
              <div className="gp-l-platform"></div>
              <h4 className="gp-l-platform-h">platform</h4>
              {platformArray.map((item, index) => (
                <Link
                  to="/"
                  onClick={() => selectPlatform(item.platform.id)}
                  style={{ paddingRight: "7px" }}
                  key={index}
                  href="#"
                >
                  {item.platform.name}
                </Link>
              ))}
              <div className="gp-l-platform"></div>
              <h4 className="gp-l-platform-h">publishers</h4>
              {gamedetials.details.publishers.map((item, index) => (
                <span style={{ paddingRight: "7px" }} key={index} href="#">
                  {item.name}
                </span>
              ))}
              <div className="gp-l-platform"></div>
              <h4 className="gp-l-platform-h">tags</h4>
              {gamedetials.details.tags.map((item, index) => (
                <Link
                  to="/"
                  onClick={() => selectTags(item.id)}
                  style={{ paddingRight: "7px" }}
                  key={index}
                  href="#"
                >
                  {item.name}
                </Link>
              ))}

              <div className="gp-l-platform"></div>
              <h4 className="gp-l-platform-h">Other games in the series</h4>
              {gamedetials.series.results.map((item, index) => (
                <Link
                  to={`/${item.slug}`}
                  style={{ paddingRight: "7px" }}
                  key={index}
                  href="#"
                >
                  {item.name}
                </Link>
              ))}
              <div className="gp-l-platform"></div>
              <h4 className="gp-l-platform-h">offical website </h4>
              <a href={gamedetials.details.website}>{gamedetials.website}</a>
            </div>

            <div className="gp-flexbox">
              <div className="gp-l-platform"></div>
              <h4 className="gp-l-platform-h"> Metacritic Ratings</h4>
              <span href="">{gamedetials.details.metacritic}</span>

              <div className="gp-l-platform"></div>
              <h4 className="gp-l-platform-h">developers</h4>
              {gamedetials.details.developers.map((item, index) => (
                <span style={{ paddingRight: "7px" }} key={index} href="#">
                  {item.name}
                </span>
              ))}
              <div className="gp-l-platform"></div>
              <h4 className="gp-l-platform-h">ESRB Ratings</h4>
              {gamedetials.details.esrb_rating !== null && (
                <span href="">{gamedetials.details.esrb_rating.name}</span>
              )}
              <div className="gp-l-platform"></div>
              <h4 className="gp-l-platform-h">genres</h4>
              {gamedetials.details.genres.map((item, index) => (
                <Link
                  to="/"
                  onClick={() => selectGener(item.id)}
                  style={{ paddingRight: "7px" }}
                  key={index}
                  href="#"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="gp-sys">
            <h3>System requirements for PC</h3>
            {gamedetials.details.platforms.map((item, index) => (
              <div key={index}>
                {Object.keys(item.requirements).length !== 0 && (
                  <p>{item.requirements.minimum}</p>
                )}
              </div>
            ))}
            {gamedetials.details.platforms.map((item, index) => (
              <div key={index}>
                {Object.keys(item.requirements).length !== 0 && (
                  <p>{item.requirements.recommended}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export { Gamepage };
