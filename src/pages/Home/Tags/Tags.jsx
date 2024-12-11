import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Tags = () => {
  return (
    <div className="sm:flex-col justify-around items-center my-3">
      <div>
        <p className="text-4xl font-bold mb-7">
          YOU CAN POSTS ABOUT <br />
          <span className="text-3xl bg-red-600 font-bold px-2 ">
            <Typewriter
              words={[
                "Technologis",
                "Movies & TV Shows",
                "Politics",
                "Sports",
                "Lifestyle",
              ]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              // onLoopDone={handleDone}
              // onType={handleType}
            />
          </span>
        </p>
      </div>
      <div className="sm:flex justify-evenly gap-3">
        {/* <p className="font-semibold bg-info p-1 rounded-lg shadow-lg">
          Technologis
        </p>
        <p className="font-semibold bg-info p-1 rounded-lg shadow-lg">
          Movies & TV Shows
        </p>
        <p className="font-semibold bg-info p-1 rounded-lg shadow-lg">
          Politics
        </p>
        <p className="font-semibold bg-info p-1 rounded-lg shadow-lg">Sports</p>
        <p className="font-semibold bg-info p-1 rounded-lg shadow-lg">
          Lifestyle
        </p> */}
      </div>
    </div>
  );
};

export default Tags;
