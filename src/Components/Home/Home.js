import React from "react";
import Banner from "./Banner";
import clock from "../../Utilities/assets/icons/clock.svg";
import location from "../../Utilities/assets/icons/marker.svg";
import phone from "../../Utilities/assets/icons/phone.svg";
import "./BasicStyles.css";
import InfoCard from "./InfoCard";
import Services from "./Services";
import DentalCare from "./DentalCare";
import Appointment from "./Appointment";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const Home = () => {
  const infoCardsData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Open at 9.0 AM to 5.0 PM everyday.",
      icon: clock,
      bgColor: "bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]",
    },
    {
      id: 2,
      name: "Our Locations",
      description: "Brooklyn, NY 10036, United States",
      icon: location,
      bgColor: "bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]",
    },
    {
      id: 3,
      name: "Contact Us Now",
      description: "+000 123 456789",
      icon: phone,
      bgColor: "bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]",
    },
  ];
  return (
    <div className="w-[90%] lg:w-full mx-auto">
      <div className="banner">
        <Banner />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {infoCardsData.map((card) => (
            <InfoCard key={card.id} card={card}></InfoCard>
          ))}
        </div>
      </div>
      <div className="my-20">
        <Services />
      </div>

      <div>
        <DentalCare />
      </div>
      <Appointment/>
      <Testimonials/>
      <Contact/>
    </div>
  );
};

export default Home;
