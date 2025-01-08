import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import SignUp from "../Pages/SignUp";
import LogIn from "../Pages/LogIn";
import AllBooks from "../Pages/AllBooks";
import Home from "../Pages/Home";
import Details from "../Pages/Details";
import PrivateRoute from "./PrivateRoute";
import FilteredBooks from "../Components/FilteredBooks";
import ErrorPage from "../Pages/ErrorPage";
import AddBook from "../Pages/AddBook";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader : () => fetch(`http://localhost:5000`),
        children : [
          {
            path : '/category/:category',
            element : <FilteredBooks></FilteredBooks>,
            loader : ({params}) => fetch(`http://localhost:5000/category?category=${params.id}`)
          }
        ]
      },
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
        element :<PrivateRoute><AllBooks></AllBooks></PrivateRoute>
      },
      {
        path : "/book_details/:id",
        element : <Details></Details>,
        loader : ({params}) => fetch(`http://localhost:5000/book_details/${params.id}`)
      },
      {
        path: "/addBooks",
        element :<AddBook></AddBook>
      }

    ],
  },
]);

export default router;
