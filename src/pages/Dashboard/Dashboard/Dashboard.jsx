import React from "react";
import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex justify-between">
      <Helmet>
        <title>PostStream | Dashboard</title>
      </Helmet>
      <div className="bg-green-300 w-52 min-h-screen flex flex-col">
        <NavLink
          to="dashboard/profile"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              background: isActive ? "none" : "",
              color: isActive ? "#EEFF25" : "white",
              fontWeight: isActive ? "bold" : "",
              marginRight: "10px",
              marginLeft: "10px",
              marginTop: "20px",
              fontSize: "20px",
            };
          }}
        >
          My Profile
        </NavLink>
        <NavLink
          to="dashboard/addpost"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              background: isActive ? "none" : "",
              color: isActive ? "#EEFF25" : "white",
              fontWeight: isActive ? "bold" : "",
              marginRight: "10px",
              marginLeft: "10px",
              fontSize: "20px",
            };
          }}
        >
          Add Post
        </NavLink>
        <NavLink
          to="dashboard/mypost"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              background: isActive ? "none" : "",
              color: isActive ? "#EEFF25" : "white",
              fontWeight: isActive ? "bold" : "",
              marginRight: "10px",
              marginLeft: "10px",
              fontSize: "20px",
            };
          }}
        >
          My Post
        </NavLink>
      </div>
      <div className="w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
