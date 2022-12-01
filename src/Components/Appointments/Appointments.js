import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner";
import AppointmentOptions from "./AppointmentOptions";

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <AppointmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <AppointmentOptions selectedDate={selectedDate} />
    </div>
  );
};

export default Appointments;
