import React from "react";

const Tags = () => {
  return (
    <div className="sm:flex justify-around items-center my-3">
      <div>
        <div>
          <p className="text-4xl font-bold mb-7">YOU CAN POSTS ABOUT</p>
        </div>
        <div className="flex justify-evenly gap-3">
          <p className="font-semibold bg-info p-1 rounded-lg shadow-lg">
            Technologis
          </p>
          <p className="font-semibold bg-info p-1 rounded-lg shadow-lg">
            Movies & TV Shows
          </p>
          <p className="font-semibold bg-info p-1 rounded-lg shadow-lg">
            Politics
          </p>
          <p className="font-semibold bg-info p-1 rounded-lg shadow-lg">
            Sports
          </p>
          <p className="font-semibold bg-info p-1 rounded-lg shadow-lg">
            Lifestyle
          </p>
        </div>
      </div>
      <div>
        <h1>ANOUNCEMENT</h1>
        <div className=" border-x-2"> handleLo</div>
      </div>
    </div>
  );
};

export default Tags;
