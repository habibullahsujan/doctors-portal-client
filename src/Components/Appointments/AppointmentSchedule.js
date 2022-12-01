import React, { useContext } from "react";
import { format } from "date-fns";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/UserContext";
const AppointmentSchedule = ({
  selectedOption,
  selectedDate,
  setSelectedOption,
  refetch
}) => {
  const { name, slots, price } = selectedOption;

  const date = format(selectedDate, "PP");
  const { user } = useContext(AuthContext);

  const submitAppointment = (event) => {
    event.preventDefault();
    setSelectedOption(null);
    if (!user) {
      return toast.error("Want to booking a appointment login/register first.");
    }
    const form = event.target;
    const paName = form.name.value;
    const email = form.email.value;
    const phone = form.number.value;
    const option = form.option.value;
    const submitTime = new Date();

    const patientInfo = {
      appointment_for: name,
      appointmentDate: date,
      appointmentTime: option,
      patientName: paName,
      patientEmail: email,
      patientPhone: phone,
      formSubmitTime: submitTime,
      fee:price,

    };

    fetch("https://doctors-portal-server-beta.vercel.app/appointmentBooking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(patientInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Your Appointment Booking Success.");
          refetch();
        }
        else{
          toast.error(data.message)
        }
        console.log(data);
      });
  };
  return (
    <div>
      <input type="checkbox" id="selected-option" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="selected-option"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center text-info">{name}</h3>
          <form onSubmit={submitAppointment} className="py-4">
            <input
              type="text"
              value={date}
              className="input input-bordered w-full my-3 text-center"
            />
            <select name="option" className="select select-bordered w-full">
              {slots.map((slot, idx) => (
                <option key={idx} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              className="input input-bordered w-full my-3"
              defaultValue={user?.displayName}
            />
            <input
              type="Number"
              name="number"
              placeholder="Phone Number"
              className="input input-bordered w-full my-3"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input input-bordered w-full my-3"
              defaultValue={user?.email}
              disabled
            />
            <button
              type="submit"
              value=""
              className="btn w-full"
              placeholder="Submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSchedule;
