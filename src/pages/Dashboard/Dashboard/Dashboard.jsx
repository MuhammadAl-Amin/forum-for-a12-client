import React from "react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="bg-green-300 w-52 min-h-screen flex flex-col">
        <NavLink
          to="/profile"
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
          My Profile
        </NavLink>
        <NavLink
          to="/addpost"
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
          Add Post
        </NavLink>
        <NavLink
          to="/mypost"
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
          My Post
        </NavLink>
      </div>
    </div>
  );
};

export default Dashboard;
