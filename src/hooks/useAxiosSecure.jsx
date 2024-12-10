import axios from "axios";
import React from "react";

const axiosSecure = axios.create({
  baseURL: "forum-for-a12-server.vercel.app",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
