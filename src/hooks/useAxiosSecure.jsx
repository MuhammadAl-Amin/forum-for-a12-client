import axios from "axios";
import React from "react";

const axiosSecure = axios.create({
  baseURL: "https://forum-for-a12-server.vercel.app",
  // baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
