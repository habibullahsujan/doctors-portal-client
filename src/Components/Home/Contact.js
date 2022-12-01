import React from "react";
import Button from "../Common/Button";
import background from "../../Utilities/assets/images/appointment.png";

const Contact = () => {
  return (
    <div style={{ background: `url(${background})` }} className="pb-28 pt-10">
      <div className="text-center lg:w-[450px] w-[90%]  h-[460px] mx-auto">
        <span className="text-info font-bold">Contact Us</span>
        <h3 className="font-bold text-2xl text-white">
          Stay Connected With Us
        </h3>
        <div className="flex flex-col justify-center pb-10">
          <input
            className="my-3 rounded-lg py-2 px-4"
            type="email"
            name=""
            id=""
            placeholder="Email"
          />
          <input
            className="my-3 rounded-lg py-2 px-4"
            type="text"
            name=""
            id=""
            placeholder="Subject"
          />
          <textarea
            className="rounded-lg py-2 px-4"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
        </div>
        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default Contact;
