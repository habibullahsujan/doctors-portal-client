import React from "react";
import banner from "../../Utilities/assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div>
      <div className="lg:flex block w-[90%] lg:flex-row-reverse lg:w-[80%] mx-auto my-20">
        <img className="lg:w-1/2" src={banner} alt="" />
        <div className="w-full lg:w-1/2">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
