import { useContext } from "react";
import { GamesArea } from "./GamesArea";
import { Game } from "../store/Game-Context";

function Root_GamesArea() {
  const { gamelist, pagenum, setPagenum, updateData, yourData, loading } =
    useContext(Game);

  const PlatformObj = {
    4: "PC",
    16: "Playstation",
    1: "Xbox",
    7: "Nintendo Switch",
    3: "IOS",
    21: "Android",
    6: "Linux",
    5: "MacOS",
  };

  const GenresObj = {
    4: "Action",
    3: "Adventure",
    6: "Fighting",
    5: "RPG",
    7: "Puzzle",
    1: "Racing",
    2: "Shooter",
    10: "Strategy",
    15: "Sports",
  };

  const ReleaseObj = {
    "2024-01-10,2024-02-10": "Last 30days",
    "2024-02-05,2024-02-12": "This Week",
    "2024-02-13,2024-02-20": " Next Week",
    "2023-02-12,2024-02-12": "Best of Year",
    "2023-01-01,2023-12-31": "Popular in 2023",
  };

  const nonNullValues = Object.values(yourData).filter(
    (value) => value !== null
  );

  function selectOrder(id) {
    if (yourData.ordering == id) return;
    updateData((prevData) => ({
      ...prevData,
      ordering: id,
    }));
  }

  return (
    <>
      <div className="gca-gride">
        <h1 style={{ color: "white" }}>
          {PlatformObj[yourData.platforms]}
          {GenresObj[yourData.genres]}
          {ReleaseObj[yourData.dates]}
        </h1>
        <div className="gcadropdownbox">
          <div className="gca-ddcontainer">
            <select
              className="gca-db-selectbox"
              onChange={(event) => selectOrder(event.target.value)}
            >
              <option value="null">Popularity</option>
              <option value="name">Name</option>
              <option value="released">Release date</option>
              <option value="rating">Rating</option>
              <option value="added">Date added</option>
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <h3 style={{ color: "white" }}>loading...</h3>
      ) : (
        <GamesArea
          gamelist={gamelist}
          yourData={yourData}
          pagenum={pagenum}
          setPagenum={setPagenum}
          updateData={updateData}
        />
      )}
    </>
  );
}

export default Root_GamesArea;
