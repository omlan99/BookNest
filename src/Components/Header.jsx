import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);
  console.log(user);
  const links = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={'/allBooks'}>All Books</Link>
      </li>
      <li>
        <Link>Add Books</Link>
      </li>
      <li>
        <Link>Borrowed Books</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
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
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Book Nest</a>
        </div>
        <div className="navbar-center hidden lg:flex "></div>
        <div className="navbar-end gap-3">
          <ul className="menu menu-horizontal px-1 flex gap-1">{links}</ul>
          {user ? (
            <>
              
              <div className="h-[40px] w-[40px]  rounded-full bg-black overflow-hidden">
              <img className=" object-cover object-center" src={user.photoURL} alt="" />
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

export default Header;
