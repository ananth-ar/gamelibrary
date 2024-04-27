import { Gamebar } from "./Gamebar";
import "./css/GamesArea.css";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";


function GamesArea({ gamelist, pagenum, setPagenum }) {

  function setPrevPage() {
    if (pagenum != 1) {
      setPagenum(pagenum - 1);
    }
  }

  return (
    <>
      <div>
        <div className="gca-container">
          {gamelist.map((item, index) => (
            <Gamebar
              key={index}
              coverimgurl={item.background_image}
              gameName={item.name}
              releasedate={item.released}
              rating={item.rating}
              genres={item.genres}
              platforms={item.platforms}
              id={item.id}
              slug={item.slug}

            />
          ))}
        </div>
        <div className="gca-page">
          <a href="#" onClick={() => setPrevPage()} className="gca-pagebtn">
            <ArrowBigLeft />
          </a>
          <div className="gca-pagenum">{pagenum}</div>
          <a
            href="#"
            onClick={() => setPagenum(pagenum + 1)}
            className="gca-pagebtn"
          >
            <ArrowBigRight />
          </a>
        </div>
      </div>
    </>
  );
}

export { GamesArea };
