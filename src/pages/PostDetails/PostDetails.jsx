import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
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

  const mutation = useMutation({
    mutationFn: async (voteInfo) => {
      const res = await axiosSecure.post("/votes", voteInfo);
      return res.data;
    },
  });

  // const handleDownvote = async () => {
  //   try {
  //     await axiosSecure.patch(`/posts/downvote/${id}`);
  //     refetch(); // Refresh post data after downvoting
  //   } catch (error) {
  //     console.error("Failed to downvote post", error);
  //   }
  // };

  const { data: votes = [], refetch: refetchVotes } = useQuery({
    queryKey: ["votes"],
    queryFn: async () => {
      const res = await axiosSecure.get("/votes");
      return res.data;
    },
  });
  const handleUpvote = () => {
    const voteInfo = {
      postId: id,
      voterEmail: post?.email,
      upVote: 1,
    };
    let findVote = votes.find(
      (vote) => vote.postId === id && vote.voterEmail === post?.email
    );
    if (findVote) {
      return;
    } else {
      mutation.mutate(voteInfo, {
        onSuccess: () => {
          refetch();
        },
        onError: (error) => {
          console.error("Failed to upvote post", error);
        },
      });
    }
  };
  const handleDownvote = () => {
    const downVoteInfo = {
      postId: id,
      voterEmail: post?.email,
      downVote: 1,
    };
    let findVote = votes.find(
      (vote) => vote.postId === id && vote.voterEmail === post?.email
    );
    if (findVote) {
      return;
    } else {
      mutation.mutate(downVoteInfo, {
        onSuccess: () => {
          console.log("success");
          refetch();
        },
        onError: (error) => {
          console.error("Failed to upvote post", error);
        },
      });
    }
  };
  refetchVotes();
  let totalUpVotes = votes.reduce(
    (total, item) => total + (item.upVote || 0),
    0
  );
  let totalDownVotes = votes.reduce(
    (total, items) => total + (items.downVote || 0),
    0
  );
  console.log(totalDownVotes);

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
              <button onClick={handleUpvote} className="flex items-center">
                <BiUpvote className="w-8 h-8" />
                <span>{totalUpVotes}</span>
              </button>
              <button onClick={handleDownvote} className="flex items-center">
                <BiDownvote className="w-8 h-8" />
                <span>{totalDownVotes}</span>
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
