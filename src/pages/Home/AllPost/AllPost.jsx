import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllPost = () => {
  const axiosSecure = useAxiosSecure();
  const { data: posts = [], refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axiosSecure.get("/posts");
      return res.data;
    },
  });
  return (
    <div className="mx-2 bg-teal-50">
      <h1 className="text-3xl font-bold text-center my-5">AllPost</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
        {posts.map((post) => (
          <div key={post._id}>
            <div className="card bg-base-100 w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.description}</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPost;
