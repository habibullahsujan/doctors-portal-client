import React from 'react';
import banner from '../../Utilities/assets/images/chair.png'
import Button from '../Common/Button';

const Banner = () => {
    return (
        <div className="hero-content flex-col lg:flex-row-reverse lg:w-[90%] mx-auto my-20">
        <div>
              <img src={banner} alt="" />
          </div>
          <div>
            <h2 className="font-bold text-6xl my-4">Your New Smile Starts Here</h2>
            <p className="my-2 text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <Button>Get Started</Button>
          </div>
        
        </div>
    );
};

export default Banner;