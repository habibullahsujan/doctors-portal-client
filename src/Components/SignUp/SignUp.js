import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import useToken from "../../Hooks/userToken";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [token] = useToken(userEmail);

  if (token) {
    navigate("/");
  }

  const handleSignUpUser = (data) => {
    const userProfile = {
      displayName: data.name,
    };
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUserProfile(userProfile)
          .then(() => {
            saveUserInfoDB(data.name, data.email);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  };

  const saveUserInfoDB = (name, email) => {
    const userInfo = {
      user_name: name,
      user_email: email,
    };

    fetch("https://doctors-portal-server-beta.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserEmail(email);
      });
  };

  return (
    <div className="w-full lg:w-[40%] mx-auto border border-gray-400 p-6 my-10 rounded-sm">
      <h3 className="font-bold text-2xl text-center">Sign Up</h3>
      <form onSubmit={handleSubmit((data) => handleSignUpUser(data))}>
        <div className="my-3">
          <label className="font-semibold">Name</label>
          <input
            {...register("name", { required: "username is required." })}
            placeholder="Name"
            className=" px-2 rounded-sm border py-1 border-gray-500 w-full outline-accent-focus"
            type="text"
            name="name"
            id=""
          />
          {errors.name && <p role="alert">{errors.name?.message}</p>}
        </div>
        <div className="my-3">
          <label className="font-semibold">Email</label>
          <input
            {...register("email", { required: "Email address is required." })}
            placeholder="Email"
            className=" px-2 rounded-sm border py-1 border-gray-500 w-full outline-accent-focus"
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
              
            })}
            className="rounded-sm px-2 py-1 border border-gray-500 w-full outline-accent-focus"
            type="password"
            name="password"
            placeholder="Password"
            id=""
          />
          {errors.password && <p role="alert">{errors.password?.message}</p>}
        </div>
        <div className="my-2">
          <button className="btn rounded-sm my-1 w-full bg-slate-700 py-3 text-white">
            Sign Up
          </button>
          <h3>
            Already have an account?
            <Link to={"/login"} className="text-info">
              login
            </Link>
          </h3>
          <div className="divider">OR</div>
          <button className="hover:bg-slate-800 hover:text-white rounded-sm uppercase text-gray-600 w-full border border-gray-400 py-3">
            Continue with google
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
