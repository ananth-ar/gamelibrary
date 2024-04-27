import React from "react";
import "./css/Slider.css";
import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useLoaderData } from "react-router-dom";
import { getGameDetails } from "../services/Apiservies";

export const Slider = () => {
  const [index, setIndex] = useState(0);

  const gamescreenshots = useLoaderData();  

  function showNext() {
    setIndex((i) => {
      if (i === gamescreenshots.results.length - 1) return 0;
      return i + 1;
    });
  }
  function showPrev() {
    setIndex((i) => {
      if (i === 0) return gamescreenshots.results.length - 1;
      return i - 1;
    });
  }

  return (
    <>
      <img
        style={{
          maxWidth: "1400px",
          height: "800px",
          margin: "0 auto",
          objectFit: "cover",
          display: "block",
        }}
        src={gamescreenshots.results[index].image}
        alt=""
      />
      <div className="slider-flex">
        <button onClick={showPrev}>
          <ArrowBigLeft />
        </button>
        <div style={{ color: "white" }}>image:{index + 1}</div>
        <button onClick={showNext}>
          <ArrowBigRight />
        </button>
      </div>
    </>
  );
};

export async function loaderslider({ params }) {
  const id = params.id;
  const gameDetails = await getGameDetails(id);
  return gameDetails.screenshots;
}
