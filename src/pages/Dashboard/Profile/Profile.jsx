import React from "react";
import useAuth from "../../../hooks/useAuth";

const Profile = () => {
  const user = useAuth();
  console.log(user.user);
  return (
    <div className="mx-2 mt-2">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={user.user?.photoURL} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{user.user?.displayName}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
