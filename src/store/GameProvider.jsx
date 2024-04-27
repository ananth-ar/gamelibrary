import React, { useEffect, useState } from "react";
import { Game } from "./Game-Context";
import { getGames } from "../services/Apiservies";

function GameProvider({ children }) {
  const [gamelist, setGamelist] = useState([]);
  const [pagenum, setPagenum] = useState(1);
  const [loading, setLoading] = useState(false);
  const [yourData, setYourData] = useState({
    ordering: null,
    platforms: null,
    dates: null,
    genres: null,
    tags: null,
    ordering: null,
  });

  useEffect(() => {
    
    setPagenum(1);
  }, [yourData]);

  useEffect(() => {
    setLoading(true);

    async function fetchGameData() {
      const data = await getGames(pagenum, yourData);
      setGamelist(data);
      setLoading(false);
    }

    fetchGameData();
  }, [pagenum, yourData]);

  const updateData = (newData) => {
    setYourData(newData);
  };

  const gamestate = {
    gamelist: gamelist,
    pagenum: pagenum,
    yourData: yourData,
    loading: loading,
    setPagenum: setPagenum,
    updateData: updateData,
    setLoading: setLoading,
  };

  return <Game.Provider value={gamestate}>{children}</Game.Provider>;
}

export default GameProvider;
