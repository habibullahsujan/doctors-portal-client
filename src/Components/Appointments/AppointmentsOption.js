import React from "react";


const AppointmentsOption = ({ option, setSelectedOption }) => {
  const { name,price, slots } = option;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <h2 className=" text-2xl font-bold text-info ">{name}</h2>
          <p>{slots?.length ? slots[0] : "No Appointment Available"}</p>
          <p>
            {slots?.length} {slots?.length < 1 ? "space" : "spaces"} available
          </p>
          <p>Price:${price}</p>
          <div className="card-actions justify-center">
            <label
            disabled={slots.length === 0}
            onClick={()=>setSelectedOption(option)}
              htmlFor="selected-option"
              className="btn btn-info text-white font-bold"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsOption;
