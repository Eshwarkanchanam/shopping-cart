import React from "react";
import { categories } from "../../fetch/data";
import { CategoryCard } from "./CategoryCard";
export const ShopByCategory = () => {
  return (
    <div className="w-full tracking-wide flex-col flex justify-center items-center">
      <div className="max-w-7xl flex flex-col justify-center items-center flex-wrap">
        <div className="max-w-2xl text-center  mt-8 m-4 ">
          <h2 className="font-bold  text-2xl mt-2 mb-4 capitalize">
            Shop by category
          </h2>
          <p className="text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            odio ex? Suscipit voluptas quibusdam beatae, officiis rerum expedita
            nesciunt dolorum?
          </p>
        </div>
        <div className="max-w-7xl flex flex-col flex-wrap justify-center items-center sm:flex-row">
          {categories.map((category,index) => {
            return <CategoryCard {...category} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};
