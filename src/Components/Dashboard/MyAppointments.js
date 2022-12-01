import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../Context/UserContext";

const MyAppointments = () => {
  const { user } = useContext(AuthContext);
  const { data: bookings = [] } = useQuery({
    queryKey: ["appointmentSchedule", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://doctors-portal-server-beta.vercel.app/appointmentBooking?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();

      return data;
    },
  });

  return (
    <div>
      <h3 className="font-semibold text-2xl">My Appointments</h3>
      <div className="overflow-x-auto my-6">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Appointment Date</th>
              <th>Appointment Time</th>
              <th>Appointment Fee</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, idx) => (
              <tr>
                <td>{idx + 1}</td>
                <td>{booking.patientName}</td>
                <td>{booking?.appointment_for}</td>
                <td>{booking?.appointmentDate}</td>
                <td>{booking?.appointmentTime}</td>
                <td>${booking?.fee}</td>
                <td>
                  {
                    booking?.paid? <span>Paid</span> :<Link to={`/dashboard/payment/${booking._id}`}>
                    {" "}
                    <button className="btn btn-primary btn-sm rounded-lg text-white">
                      Pay
                    </button>{" "}
                  </Link>
                  }
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* {bookings.length || (
          <div className="text-center">you have no appointment</div>
        )} */}
      </div>
    </div>
  );
};

export default MyAppointments;
