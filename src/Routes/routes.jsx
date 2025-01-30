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
import Update from "../Pages/Update";
import Borrowedbooks from "../Pages/Borrowedbooks";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path : '/category/:category',
        element : <FilteredBooks></FilteredBooks>,
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
        element : <PrivateRoute><Details></Details></PrivateRoute>,
     
      },
      {
        path: "/addBooks",
        element : <PrivateRoute><AddBook></AddBook></PrivateRoute>
      },
      {
        path : '/update/:id',
        element : <PrivateRoute><Update></Update></PrivateRoute>
      },
      {
        path : '/borrowedBooks',
        element : <PrivateRoute><Borrowedbooks></Borrowedbooks></PrivateRoute>
      },

    ],
  },
]);

export default router;
