import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import SignUp from "../Pages/SignUp";
import LogIn from "../Pages/LogIn";
import AllBooks from "../Pages/AllBooks";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path : '/allBooks',
        element : <AllBooks></AllBooks>
      }
    ],
  },
]);

export default router;
