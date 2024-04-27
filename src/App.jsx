import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { RootLayout } from "./components/RootLayout";
import { loaderslider, Slider } from "./components/Slider";
import GameProvider from "./store/GameProvider";
import Root_Gamepage from "./components/Root_Gamepage";
import Root_GamesArea from "./components/Root_GamesArea";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Root_GamesArea /> },
      {
        path: "/:slug",
        element: <Root_Gamepage />,
      },
      {
        path: "/:slug/image",
        element: <Slider />,
        loader: loaderslider,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GameProvider>
        <RouterProvider router={router} />
        </GameProvider>
    </>
  );
}

export default App;
