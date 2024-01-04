import React from "react";
import { Link } from "react-router-dom";

export const CategoryCard = ({ img, title, link }) => {
  return (
    <Link to={link}>
      <div className="aspect-[16/12] hover:scale-105  hover:duration-1000 flex border-2 m-4 min-w-[14rem] max-w-[18rem]">
        <div className="w-1/4 relative">
          <p className="absolute text-2xl font-semibold text-gray-700 capitalize z-10 left-8 top-8">
            {title}
          </p>
          <p className="absolute z-10 text-xs left-8 bottom-20 underline">
            explore items
          </p>
        </div>
        <div className="w-3/4 bg-gray-200">
          <img src={img} alt={title} className="object-cover h-full" />
        </div>
      </div>
    </Link>
  );
};
