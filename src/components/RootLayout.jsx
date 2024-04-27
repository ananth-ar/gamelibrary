import { Outlet } from "react-router-dom";
import { Searchbar } from "./Searchbar";
import { Sidebar } from "./Sidebar";
import "./css/RootLayout.css";
import { Footer } from "./Footer";
import ScrollToTop from "../services/ScrollToTop";
import { useContext } from "react";
import { Game } from "../store/Game-Context";

function RootLayout() {
  const { loading } = useContext(Game);

  return (
    <>
      <ScrollToTop />
      <Searchbar />
      <div className="rl-sidebaroutlet">
        <div className="rl-sidebar">
          <Sidebar />
        </div>
        <div className="rl-outlet">
          <Outlet />
        </div>
      </div>
      <div className="rl-footerflex">
        <Footer />
      </div>
    </>
  );
}

export { RootLayout };
