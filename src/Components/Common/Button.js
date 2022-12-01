import React from "react";

const Button = ({children}) => {
  return (
    <button className="btn btn-primary border-none my-5  bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]">
      {children}
    </button>
  );
};

export default Button;
