import React from "react";
import Banner from "../Banner/Banner";
import Tags from "../Tags/Tags";
import AllPost from "../AllPost/AllPost";
import Anouncement from "../Anouncement/Anouncement";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="flex justify-between">
        <Tags></Tags>
        <Anouncement></Anouncement>
      </div>
      <AllPost></AllPost>
    </>
  );
};

export default Home;
