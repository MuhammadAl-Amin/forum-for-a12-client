import { useMutation } from "@tanstack/react-query";
import React, { useRef } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddPost = () => {
  const formRef = useRef(null);
  console.log(formRef);
  const axiosSecure = useAxiosSecure();

  const mutation = useMutation({
    mutationFn: async (postInfo) => {
      const res = await axiosSecure.post("/posts", postInfo);
      return res.data;
    },
    onSuccess: () => {
      formRef.current.reset();
    },
  });
  const handleAddPost = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const email = form.email.value;
    const tag = form.tag.value;
    const title = form.title.value;
    const description = form.description.value;

    console.log(name, photo, email, tag, title, description);
    const postInfo = {
      name: name,
      photoURL: photo,
      email: email,
      tag: tag,
      title: title,
      description: description,
    };
    mutation.mutate(postInfo);
  };
  return (
    <div>
      {" "}
      <div className="card w-full">
        <form onSubmit={handleAddPost} ref={formRef} className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Author Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="url"
                placeholder="photoURL"
                name="photoURL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Author Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Post Title</span>
              </label>
              <input
                type="text"
                placeholder="Title"
                name="title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Select Tag</span>
              </label>
              <select className="select select-bordered" name="tag">
                <option>Technologis</option>
                <option>Movies & TV Shows</option>
                <option>Politics</option>
                <option>Sports</option>
                <option>Lifestyle</option>
              </select>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Post Description</span>
            </label>
            <textarea
              placeholder="Description"
              name="description"
              className="textarea textarea-bordered"
              rows="4"
              required
            />
          </div>
          <div className="form-control mt-6">
            <input
              className="btn bg-[#D1A054B2]"
              type="submit"
              value="Add Post"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
