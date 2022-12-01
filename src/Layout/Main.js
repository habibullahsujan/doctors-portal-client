import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Common/Footer";
import Header from "../Components/Common/Header";

const Main = () => {
  return (
    <div className="lg:max-w-[95%] mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
