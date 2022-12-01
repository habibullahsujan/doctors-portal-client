import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllUser = () => {
  const url = `https://doctors-portal-server-beta.vercel.app/users`;
  const { data: users = [], refetch} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdminBtn = (id) => {
    fetch(`https://doctors-portal-server-beta.vercel.app/dashboard/admin/${id}`, {
      method: "PUT",
      headers:{
        authorization:`Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch()
      });
  };
  return (
    <div>
      <h3>All User</h3>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={idx}>
              <th>{idx + 1}</th>
              <td>{user?.user_name}</td>
              <td>{user?.user_email}</td>
              <td>
                {user?.role !== "admin" && (
                  <button
                    className="btn btn-info"
                    onClick={() => handleMakeAdminBtn(user._id)}
                  >
                    Make Admin
                  </button>
                )}
              </td>
              <td>
                {" "}
                <button className="btn btn-primary">Delete</button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;
