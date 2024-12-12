import React, { useContext, useRef } from "react";

import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const axiosSecure = useAxiosSecure();
  const formRef = useRef(null);
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (userInfo) => {
      const res = await axiosSecure.post("/users", userInfo);
      return res.data;
    },
    onError: (error) => {
      console.error("Error creating user:", error);
    },
  });

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    const condition = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

    if (!condition.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Error...",
        text: "Password showed be minimum '6 digit' and at least 'one number' and, 'one uppercase' and 'one lowercase'.",
      });
    }

    createUser(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      updateUserProfile(name, photo).then(() => {
        Swal.fire({
          icon: "success",
          title: "WoW...",
          text: "User Profile Updated successfully done!",
        });
        formRef.current.reset();
        navigate("/");
      });
    });
    const userInfo = {
      name: name,
      photoURL: photo,
      email: email,
      badge: "BRONZE",
    };
    mutation.mutate(userInfo);
  };
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content">
          <div className="flex-col">
            <div className="text-center">
              <h1 className="text-2xl lg:text-5xl font-bold">SignUp now!</h1>
            </div>
            <div className="card w-full">
              <form onSubmit={handleSignUp} ref={formRef} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
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
                    <span className="label-text">Email</span>
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
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn bg-[#D1A054B2]"
                    type="submit"
                    value="SignUp"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
