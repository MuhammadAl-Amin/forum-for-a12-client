import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllPost = () => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { data: posts = [], refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axiosSecure.get("/posts");
      return res.data;
    },
  });

  const handleDetailsPost = (id) => {
    navigate(`/posts/${id}`);
  };
  console.log(posts);
  return (
    <div className="mx-2 bg-teal-50">
      <h1 className="text-3xl font-bold text-center my-5">AllPost</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => {
          const totalVotes = post.upVote || 0 - post.downVote || 0;

          return (
            <div key={post._id}>
              <div
                onClick={() => handleDetailsPost(post._id)}
                className="card bg-base-100 min-h-full shadow-xl"
              >
                <div className="card-body">
                  {Array.isArray(posts) && post.photoURL && (
                    <img src={post.photoURL} alt="Post" />
                  )}
                  <h2 className="card-title">{post.title}</h2>
                  <p>{post.tag}*</p>
                  <p>{post.description}</p>
                  <p>{post.date}</p>
                  <div className="card-actions justify-between">
                    <p>Comments count: {post.comments}</p>
                    <p>Vote count: {totalVotes}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllPost;
