import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import React, { useState } from "react";
import { DateRange } from "react-date-range";

const RangeOfDate = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  // console.log(state[0].startDate, state[0].endDate);
  return (
    <DateRange
      editableDateInputs={true}
      onChange={(item) => setState([item.selection])}
      moveRangeOnFirstSelection={false}
      ranges={state}
    />
  );
};

export default RangeOfDate;
