import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import {  Link as ScrollLink } from "react-scroll";
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li><ScrollLink to="category" smooth={true} duration={500}>Categories</ScrollLink></li>
      <li><ScrollLink to="about" smooth={true} duration={500}>About US</ScrollLink></li>
      <li><ScrollLink to="newsletter" smooth={true} duration={500}>Newsletter</ScrollLink></li>
      <>
       {
        user ? <> <li>
        <Link to={"/allBooks"}>All Books</Link>
      </li>
      <li>
        <Link to={"/addBooks"}>Add Books</Link>
      </li>
      <li>
        <Link to={"/borrowedBooks"}>Borrowed Books</Link>
      </li></> : <></>
       }
      </>
    </>
  );
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-1"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Book Nest</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-1">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          {user ? (
            <>
              {" "}
              <div className="avatar">
                <div className="w-10 rounded-full">
                  {<img src={user.photoURL} />}
                </div>
              </div>
              <Link to="/login" onClick={signOutUser} className="btn">
                Log Out
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="btn">
                Log In
              </Link>
              <Link to="/signUp" className="btn">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
