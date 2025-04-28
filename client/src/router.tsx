import { createBrowserRouter } from "react-router";
import HomePage from "./components/pages/home";
import StartPage from "./components/pages/startPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);
