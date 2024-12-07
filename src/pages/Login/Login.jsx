import React, { useContext, useEffect, useState } from "react";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  //   const captchaRef = useRef(null);
  //   const [disabled, setDisabled] = useState(true);

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        icon: "success",
        title: "WoW...",
        text: "Login successfully done!",
      });
      navigate(from, { replace: true });
    });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.current?.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content">
        <div className="flex-col">
          <div className="text-center">
            <h1 className="text-2xl lg:text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card w-full">
            <form onSubmit={handleLogin} className="card-body">
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
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  //   ref={captchaRef}
                  onBlur={handleValidateCaptcha}
                  type="text"
                  placeholder="Type the captcha above"
                  name="captcha"
                  className="input input-bordered"
                  required
                />
                {/* <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-outline btn-xs mt-2"
                >
                  validation
                </button> */}
              </div>
              <div className="form-control mt-6">
                <input
                  // disabled={disabled}
                  className="btn bg-[#D1A054B2]"
                  type="submit"
                  value="Login"
                />
              </div>
              <p>
                New here? <Link to="/signUp">Create New Account</Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
