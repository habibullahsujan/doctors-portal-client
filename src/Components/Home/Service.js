import React from "react";

const Service = ({service}) => {
    const {image, name,description}=service;
  return (
    <div>
      <div className="card lg:w-96 md:w-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
         
        </div>
      </div>
    </div>
  );
};

export default Service;
