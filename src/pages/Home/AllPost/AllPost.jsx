import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllPost = () => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  const { data: posts = [], refetch } = useQuery({
    queryKey: ["posts", searchQuery], // Include search query in queryKey
    queryFn: async () => {
      const res = await axiosSecure.get(`/posts?query=${searchQuery}`);
      return res.data;
    },
  });

  const handleSearch = (e) => {
    setSearchQuery(e.target.value); // Update search query on input change
    refetch(); // Trigger refetch to get filtered results
  };

  const handleDetailsPost = (id) => {
    navigate(`/posts/${id}`);
  };

  return (
    <div className="mx-2 bg-teal-50 pt-12">
      <h1 className="text-3xl font-bold text-center my-5">All Posts</h1>
      <div className="text-center mb-5">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search posts..."
          className="border p-2 rounded w-1/2"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => {
          const totalVotes = (post.upVote || 0) - (post.downVote || 0);

          return (
            <div key={post._id}>
              <div
                onClick={() => handleDetailsPost(post._id)}
                className="card bg-base-100 min-h-full shadow-xl"
              >
                <div className="card-body">
                  {post.photoURL && <img src={post.photoURL} alt="Post" />}
                  <h2 className="card-title">{post.title}</h2>
                  <p>{post.tag}</p>
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
