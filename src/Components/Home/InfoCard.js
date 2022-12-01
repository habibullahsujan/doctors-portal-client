import React from "react";

const InfoCard = ({ card }) => {
  const { icon, name, description, bgColor } = card;
  return (
    <div className={`card card-side bg-base-100 shadow-xl ${bgColor} p-4`}>
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
