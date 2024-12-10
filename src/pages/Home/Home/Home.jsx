import React from "react";
import Banner from "../Banner/Banner";
import AllPost from "../AllPost/AllPost";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>PostStream | Home</title>
      </Helmet>
      <Banner></Banner>

      <AllPost></AllPost>
    </>
  );
};

export default Home;
