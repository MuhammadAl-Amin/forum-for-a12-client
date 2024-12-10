import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";

const MyPost = () => {
  const user = useAuth();
  console.log(user);
  const axiosSecure = useAxiosSecure();
  const { data: myPosts = [], refetch } = useQuery({
    queryKey: ["myposts"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myposts?email=${user?.user?.email}`);
      return res.data;
    },
  });
  console.log(myPosts);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Post Title</th>
            <th>Up Vote</th>
            <th>Down Vote</th>
            <th>Comments</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(myPosts) &&
            myPosts.map((post) => (
              <tr key={post._id}>
                <td>{post.title}</td>
                <td>{post.upVote}</td>
                <td>{post.downVote}</td>
                <td>{post.comments}</td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyPost;
