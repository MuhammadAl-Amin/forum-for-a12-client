import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Profile = () => {
  const axiosSecure = useAxiosSecure();
  const { user: authUser } = useAuth();
  console.log(authUser?.email);
  const { data: user } = useQuery({
    queryKey: ["users", authUser?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?email=${authUser?.email}`);
      return res.data;
    },
  });
  console.log(user);

  return (
    <div className="mx-2 mt-2">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={user?.photoURL} alt="Album" />
        </figure>
        <div className="card-body w-full">
          <h2 className="card-title">{user?.name}</h2>
          <p>Email: {user?.email}</p>
          <div className="card-actions justify-end">
            <div className="font-semibold bg-orange-700 border-2 p-1 rounded-badge">
              {user?.badge}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
