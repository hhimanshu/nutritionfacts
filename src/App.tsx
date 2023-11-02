import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import SearchResults from "./Pages/SearchResults";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/:id",
    element: <SearchResults />,
  },
]);
