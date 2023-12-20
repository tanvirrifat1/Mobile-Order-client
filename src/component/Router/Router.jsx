import { createBrowserRouter } from "react-router-dom";

import Home from "../Home/Home";

import Layout from "../Layout/Main";
import Card from "../Card/card";
import Login from "../Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/card",
        element: <Card />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
