import React, { useContext } from "react";
import icon from "../../../assets/icons/images.png";
import { AuthContext } from "../../../providers/AuthProvider";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="navbar  bg-black bg-opacity-20 text-white">
      <div className="flex-1">
        <NavLink to="/" className="btn btn-ghost text-xl">
          <img src={icon} className="max-w-10 max-h-10" alt="" />
          FORUMS
        </NavLink>
      </div>
      <div className="flex-none gap-2">
        <div className="flex justify-center items-center">
          <NavLink
            to="/home"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                background: isActive ? "none" : "",
                color: isActive ? "#EEFF25" : "white",
                fontWeight: isActive ? "bold" : "",
              };
            }}
          >
            HOME
          </NavLink>
          <NavLink
            to="/membership"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                background: isActive ? "none" : "",
                color: isActive ? "#EEFF25" : "white",
                fontWeight: isActive ? "bold" : "",
                marginRight: "10px",
                marginLeft: "10px",
              };
            }}
          >
            MEMBERSHIP
          </NavLink>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
        <div className="dropdown dropdown-end">
          {user ? (
            <>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between pointer-events-none">
                    {user.displayName}
                  </a>
                </li>
                <li>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li>
                  <a onClick={handleLogOut}>Logout</a>
                </li>
              </ul>
            </>
          ) : (
            <>
              <p>
                <NavLink
                  to="/login"
                  style={({ isActive, isPending, isTransitioning }) => {
                    return {
                      background: isActive ? "none" : "",
                      color: isActive ? "#EEFF25" : "white",
                      fontWeight: isActive ? "bold" : "",
                    };
                  }}
                >
                  LOGIN
                </NavLink>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
