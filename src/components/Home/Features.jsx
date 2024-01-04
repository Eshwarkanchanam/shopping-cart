import React from "react";
import { features } from "../../fetch/features";
import FeaturesCard from "./FeaturesCard";
export const Features = () => {
  return (
    <div className="max-w-full tracking-wide flex justify-center border-gray-400 border-t-[1px] border-b-[1px] ">
      <div className="max-w-7xl  p-8 flex flex-wrap justify-around">
        {features.map((feature, index) => (
          <FeaturesCard {...feature} key={index} />
        ))}
      </div>
    </div>
  );
};
