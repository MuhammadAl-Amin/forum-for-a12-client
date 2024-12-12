import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { FaShare } from "react-icons/fa";

const PostDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data: post = {}, refetch } = useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/posts/${id}`);
      return res.data;
    },
  });

  // const handleUpvote = async () => {
  //   try {
  //     await axiosSecure.patch(`/posts/upvote/${id}`);
  //     refetch(); // Refresh post data after upvoting
  //   } catch (error) {
  //     console.error("Failed to upvote post", error);
  //   }
  // };

  // const handleDownvote = async () => {
  //   try {
  //     await axiosSecure.patch(`/posts/downvote/${id}`);
  //     refetch(); // Refresh post data after downvoting
  //   } catch (error) {
  //     console.error("Failed to downvote post", error);
  //   }
  // };

  return (
    <div className="mx-2 my-2">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={post?.photoURL} className="w-1/2 h-1/2" alt="Post" />
        </figure>
        <div className="card-body w-full">
          <div className="card-title text-2xl">{post?.title}</div>
          <h5>
            <span className="font-semibold">Author Name:</span> {post?.name}
          </h5>
          <p>
            <span className="font-semibold">Tag:</span> {post?.tag}
          </p>
          <p>
            <span className="font-semibold">Description:</span>{" "}
            {post?.description}
          </p>
          <h6>Post Date: {post?.date}</h6>

          <div className="card-actions justify-between items-center">
            <div>
              <button className="btn btn-active">Comment</button>
            </div>
            <div className="flex justify-center gap-3 items-center">
              <button className="flex items-center">
                <BiUpvote className="w-8 h-8" />
                <span>{post?.upVote || 0}</span>
              </button>
              <button className="flex items-center">
                <BiDownvote className="w-8 h-8" />
                <span>{post?.downVote || 0}</span>
              </button>
              <FaShare className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
