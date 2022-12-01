import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import toast from "react-hot-toast";
import useToken from "../../Hooks/userToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { loginUser, resetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLoginUser = (data) => {
    loginUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("Login Successfully.");
        setLoginUserEmail(data.email);
      })
      .catch((error) => console.error(error));
  };
  const verificationEmail = (value) => {
    setEmail(value);
  };
  const handleVerificationBtn = () => {
    resetPassword(email)
      .then(() => {
        toast("Verification link send to your email.");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast(errorMessage);
      });
  };

  return (
    <div>
      <div className="w-full lg:w-[35%] mx-auto border border-gray-400 p-6 my-14 shadow-2xl rounded-lg  ">
        <h3 className="font-bold text-2xl text-center">Login</h3>
        <form onSubmit={handleSubmit((data) => handleLoginUser(data))}>
          <div className="my-3">
            <label className="font-semibold">Email</label>
            <input
              {...register("email", { required: "Email address is required." })}
              placeholder="Email"
              className=" px-2 rounded-sm border py-1 border-gray-500 w-full"
              type="email"
              name="email"
              id=""
            />
            {errors.email && <p role="alert">{errors.email?.message}</p>}
          </div>
          <div className="my-3">
            <label className="font-semibold">Password</label>
            <input
              {...register("password", {
                required: "Password must be six characters long.",
              })}
              className="rounded-sm px-2 py-1 border border-gray-500 w-full"
              type="password"
              name="password"
              id=""
              placeholder="Password"
            />
            {errors.password && <p role="alert">{errors.password?.message}</p>}
          </div>
          <div className="my-2">
            <label
              htmlFor="forget-password-modal"
              className="font-semibold cursor-pointer"
            >
              Forget password?
            </label>

            <button className="rounded-sm my-1 w-full bg-slate-700 py-3 text-white font-semibold">
              Login
            </button>
            <h3>
              New to doctor's portal?
              <Link to={"/signUp"} className="text-info">
                create a new account.
              </Link>
            </h3>
            <div className="divider text-info">OR</div>
            <button className="rounded-sm uppercase text-gray-600 w-full border border-gray-400 py-3">
              Continue with google
            </button>
          </div>
        </form>
      </div>

      <input
        type="checkbox"
        id="forget-password-modal"
        className="modal-toggle"
      />
      <label className="modal cursor-pointer">
        <div className="modal-box w-4/12 max-w-5xl relative">
          <label
            htmlFor="forget-password-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">
            Did you forget your password? Want to reset password?
          </h3>
          <input
            onChange={(e) => verificationEmail(e.target.value)}
            type="email"
            placeholder="Enter your registered email address."
            className="input input-bordered w-full my-5 outline-accent-focus"
          />
          <div className="modal-action">
            <label
              onClick={handleVerificationBtn}
              htmlFor="forget-password-modal"
              className="btn"
            >
              Send a verification code
            </label>
          </div>
        </div>
      </label>
    </div>
  );
};

export default Login;
