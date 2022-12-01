import React from "react";
import quote from "../../Utilities/assets/icons/quote.svg";
import user1 from "../../Utilities/assets/images/people1.png";

const Testimonials = () => {
  return (
    <div className="my-20">
      <div className="flex justify-between my-20">
        <div>
          <h4 className="text-info font-bold text-lg">Testimonial</h4>
          <h2 className="text-2xl font-bold my-3">What Our Patients Says</h2>
        </div>
        <img className="h-[156px]" src={quote} alt="" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 ">
        <div className="shadow-2xl p-5 ">
          <p className="my-10">
            It is a long established fact that by the readable content of a lot
            layout. The point of using Lorem a more-or-less normal distribu to
            using Content here, content
          </p>
          <div className="flex items-center gap-5">
            <img
              className="border border-info p-1 rounded-[50%] h-[64px] w-[64px]"
              src={user1}
              alt=""
            />
            <div>
              <h5 className="font-bold text-lg">Winson Herry</h5>
              <small>California</small>
            </div>
          </div>
        </div>
        <div className="shadow-2xl p-5">
          <p className="my-10">
            It is a long established fact that by the readable content of a lot
            layout. The point of using Lorem a more-or-less normal distribu to
            using Content here, content
          </p>
          <div className="flex items-center gap-5">
            <img
              className="border border-info p-1 rounded-[50%] h-[64px] w-[64px]"
              src={user1}
              alt=""
            />
            <div>
              <h5 className="font-bold text-lg">Winson Herry</h5>
              <small>California</small>
            </div>
          </div>
        </div>
        <div className="shadow-2xl p-5">
          <p className="my-10">
            It is a long established fact that by the readable content of a lot
            layout. The point of using Lorem a more-or-less normal distribu to
            using Content here, content
          </p>
          <div className="flex items-center gap-5">
            <img
              className="border border-info p-1 rounded-[50%] h-[64px] w-[64px]"
              src={user1}
              alt=""
            />
            <div>
              <h5 className="font-bold text-lg">Winson Herry</h5>
              <small>California</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
