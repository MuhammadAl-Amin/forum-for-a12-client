import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { BiDownvote, BiUpvote } from "react-icons/bi";

const PostDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { data: posts = [], refetch } = useQuery({
    queryKey: ["posts", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/posts/${id}`);
      return res.data;
    },
  });
  console.log(posts);
  return (
    <div className="mx-2 my-2">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={posts?.photoURL} className="" alt="Album" />
        </figure>
        <div className="card-body w-full">
          <div className="card-title text-2xl">
            <span className="font-semibold text-base">Title :</span>{" "}
            {posts?.title}
          </div>
          <h5>
            <span className="font-semibold">Author Name:</span> {posts?.name}
          </h5>
          <p>
            <span className="font-semibold">Tag :</span> {posts?.tag}
          </p>
          <p>
            <span className="font-semibold">Description :</span>{" "}
            {posts?.description}
          </p>
          <h6>Post Date : {posts?.date}</h6>

          <div className="card-actions justify-between">
            <div>
              <button className="btn btn-active">Comment</button>
            </div>
            <p className="flex justify-center gap-3">
              <BiUpvote className="w-8 h-8" />

              <BiDownvote className="w-8 h-8" alt="Down Vote" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
