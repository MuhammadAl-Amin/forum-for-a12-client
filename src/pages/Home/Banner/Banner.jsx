import React from "react";
import Tags from "../Tags/Tags";
import Anouncement from "../Anouncement/Anouncement";
import { FaPeopleRoof } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-60">
      <div className="hero-content w-full flex-col lg:flex-row justify-between">
        <div className="md:flex w-full justify-around ">
          <Tags></Tags>
          <FaPeopleRoof className="w-32 h-32 text-orange-500" />
          {/* <Anouncement></Anouncement> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
