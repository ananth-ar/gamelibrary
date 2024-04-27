import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Game } from "../store/Game-Context";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const { yourData } = useContext(Game);

  useEffect(() => {
    const body = document.querySelector("#root");
    body.scrollIntoView(
      {
        behavior: "smooth",
      },
      500
    );
  }, [pathname, yourData]);

  return null;
}
