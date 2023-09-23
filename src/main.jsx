import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Hero from "./components/Home/Hero/Hero";
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/all-users",
        element: <Users />,
      },
      {
        path: "/user/:id",
        element: <UserDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
