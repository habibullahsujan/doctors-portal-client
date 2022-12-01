import React from 'react';
import dentalCare from "../../Utilities/assets/images/treatment.png";
import Button from "../Common/Button";

const DentalCare = () => {
    return (
        <div className="block lg:flex items-center gap-44 my-20">
        <img
          className="w-[90%] lg:w-[458px] lg:h-[576px] h-[406px] rounded-lg mx-auto"
          src={dentalCare}
          alt=""
        />
        <div>
          <h3 className="text-4xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The
            point of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop
            publishing packages and web page
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    );
};

export default DentalCare;