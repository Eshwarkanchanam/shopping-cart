import React from "react";

const FeaturesCard = ({ icon, title, description }) => {
  return (
    <div className="w-48 aspect-square flex flex-col justify-center items-center content-center">
      {icon}
      <p className="font-bold text-lg capitalize mt-2">{title}</p>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
};

export default FeaturesCard;
