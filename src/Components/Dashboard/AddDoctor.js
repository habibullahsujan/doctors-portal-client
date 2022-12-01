import React from "react";
import { useForm } from "react-hook-form";

import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const { data: specialties, isLoading } = useQuery({
    queryKey: ["doctorsSpecialty"],
    queryFn: async () => {
      const res = await fetch("https://doctors-portal-server-beta.vercel.app/doctorsSpecialty");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <div>Loading....</div>;
  }

  const handleAddDoctor = (data) => {


    const formData = new FormData();
    formData.append("image", data.img[0]);

    fetch(
      "https://api.imgbb.com/1/upload?key=ed10d9b0c9f2caf53afe65dfd8a4c97f",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((imgData) => {
        const doctorsInfo = {
          doctors_name: data.name,
          doctors_email: data.email,
          doctors_specialty: data.specialty,
          doctors_image: imgData.data.display_url,
        };

        if (imgData.success) {
          fetch(`https://doctors-portal-server-beta.vercel.app/add_doctors`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctorsInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("Doctor added done.");
                navigate("/dashboard/manage_doctors");
              }
            });
        }
      });
  };
  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold text-center">Add a Doctor Here</h1>
      <form
        className="w-1/2 mx-auto"
        onSubmit={handleSubmit((data) => handleAddDoctor(data))}
      >
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
          <label className="font-semibold">Specialty</label>
          <select
            {...register("specialty", { required: "specialty is required." })}
            className="select select-bordered w-full rounded-sm my-1"
          >
            <option disabled selected>
              Select a Specialty
            </option>
            {specialties?.map((spe) => (
              <option value={spe.name} key={spe._id}>
                {spe.name}
              </option>
            ))}
          </select>
        </div>
        <div className="my-3">
          <label className="font-semibold">Add A Photo</label>
          <input
            {...register("img", { required: "img is required." })}
            placeholder="Name"
            className=" px-2 rounded-sm border py-1 border-gray-500 w-full outline-accent-focus"
            type="file"
            name="img"
            id=""
          />
          {errors.img && <p role="alert">{errors.img?.message}</p>}
        </div>
        <div className="my-2">
          <button className="btn rounded-sm my-1 w-full bg-slate-700 py-3 text-white">
            Add A Doctor
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
