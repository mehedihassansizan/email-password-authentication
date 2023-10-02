/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "./contextProvider/ContextProvider";

const Login = () => {
  const { user, login, googleLogin } = useContext(UserContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const loginUser = result.user;
        console.log("successsfully log in");
        form.reset();
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleGoogle = () =>{
    googleLogin()
    .then(result =>{
      const googleUser = result.user;
    })
    .catch(error => {
      console.error(error.message);
    })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <form
          onSubmit={handleLogin}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
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
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              {user ? (
                <>
                  <Navigate to="/profile" replace={true}></Navigate>
                </>
              ) : (
                <button className="btn btn-primary">Login</button>
              )}
            </div>
            <div className="flex flex-col w-full border-opacity-50 mt-8">
              <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                <button onClick={handleGoogle} className="btn btn-primary w-full h-full ">Google Login</button> 
              </div>
              <div className="divider">OR</div>
              <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                content
              </div>
            </div>
            <label className="label">
              <p>
                New in this site ? Please{" "}
                <Link
                  to="/register"
                  className="label-text-alt link link-hover text-blue-600 text-[14px]"
                >
                  Register
                </Link>
              </p>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
