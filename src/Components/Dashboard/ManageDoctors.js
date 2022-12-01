import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Modal from "../Modal/Modal";

const ManageDoctors = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);

  const { data: doctors, isLoading, refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch("https://doctors-portal-server-beta.vercel.app/doctors");
      const data = await res.json();
      return data;
    },
  });
  const closeModal = () => {
    setDeleteDoctor(null)
  };
  const handleDeleteDoctor=(doctor)=>{
    fetch(`https://doctors-portal-server-beta.vercel.app/doctors/${doctor._id}`, {
        method:'DELETE',
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res=>res.json())
    .then(data=>{

        if(data.deletedCount>0){
            toast.success(`Doctor ${doctor.doctors_name} deleted successful.`)
        }

        console.log(data);
        refetch()
    })
  }

  if (isLoading) {
    return <div>Loading.....</div>;
  }

  return (
    <div>
      <h2>Doctors:{doctors.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialties</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, idx) => (
              <tr className="hover">
                <th>{idx + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={doctor.doctors_image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{doctor.doctors_name}</td>
                <td>{doctor.doctors_email}</td>
                <td>{doctor.doctors_specialty}</td>
                <td>
                  <label
                    onClick={() => setDeleteDoctor(doctor)}
                    htmlFor="delete-modal"
                    className="btn btn-outline btn-error"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {deleteDoctor && (
          <Modal
            title={"Are you want to sure delete?"}
            message={"Deleted data can not be recovered."}
            handleDeleteDoctor={handleDeleteDoctor}
            deleteDoctor={deleteDoctor}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default ManageDoctors;
