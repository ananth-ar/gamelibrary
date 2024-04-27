import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameDetails } from "../services/Apiservies";
import { Gamepage } from "./Gamepage";

function Root_Gamepage() {
  const [gamedetials, setgamedetials] = useState();
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    setLoading(true);

    const fetchGameDetails = async () => {
      const GameDetails = await getGameDetails(slug);
      setgamedetials(GameDetails);
      setLoading(false);
    };

    fetchGameDetails();
  }, [slug]);

  return (
    <>
      {loading ? (
        <h3 style={{ color: "white" }}>loading...</h3>
      ) : (
        <Gamepage gamedetials={gamedetials} slug={slug} />
      )}
    </>
  );
}

export default Root_Gamepage;
