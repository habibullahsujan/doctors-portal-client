import React, { useState } from "react";
import { format } from "date-fns";
import AppointmentsOption from "./AppointmentsOption";
import AppointmentSchedule from "./AppointmentSchedule";
import { useQuery } from "@tanstack/react-query";
import { Vortex } from "react-loader-spinner";

const AppointmentOptions = ({ selectedDate }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const date = format(selectedDate, "PP");

  const {
    data: options = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["appointmentSchedule", date],
    queryFn: async () => {
      const res = await fetch(
        `https://doctors-portal-server-beta.vercel.app/appointmentSchedule?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });
  if(isLoading){
    return  <Vortex
    visible={true}
    height="80"
    width="80"
    ariaLabel="vortex-loading"
    wrapperStyle={{}}
    wrapperClass="vortex-wrapper"
    colors={["black", "gray", "slate", "white", "red", "blue"]}
  />
  }

  return (
    <div className="my-32">
      <h3 className="font-bold text-center text-info">
        Available Appointments on {format(selectedDate, "PPPP")}
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 my-10">
        {options.map((option) => (
          <AppointmentsOption
            option={option}
            key={option._id}
            setSelectedOption={setSelectedOption}
          />
        ))}
      </div>
      <div>
        {selectedOption && (
          <AppointmentSchedule
            selectedOption={selectedOption}
            selectedDate={selectedDate}
            refetch={refetch}
            setSelectedOption={setSelectedOption}
          />
        )}
      </div>
    </div>
  );
};

export default AppointmentOptions;
