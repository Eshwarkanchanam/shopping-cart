import React, { useContext, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const options = [
  {
    id: 0,
    name: "All Products",
    link: "/products",
  },
  {
    id: 1,
    name: "electronics",
    link: "/products/category/electronics",
  },
  {
    id: 2,
    name: "jewelery",
    link: "/products/category/jewelery",
  },
  {
    id: 3,
    name: "men's clothing",
    link: "/products/category/men's clothing",
  },
  {
    id: 4,
    name: "women's clothing",
    link: "/products/category/women's clothing",
  },
];

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [showCategoryOptions, setShowCategoryOptions] = useState(false);
  return (
    <div className="border-gray-600 p-2 flex flex-col items-center">
      <section className="font-semibold">
        Products :
        <span
          className="pl-2 m-1 w-[180px] inline-block rounded-lg border-2 group relative"
          onMouseEnter={() => {
            setShowCategoryOptions(true);
          }}
          onMouseLeave={() => {
            setShowCategoryOptions(false);
          }}
        >
          {activeCategory}
          <ArrowDownwardIcon className="p-1 absolute right-2 group-hover:rotate-[180deg]" />
          {showCategoryOptions && (
            <section className="border-2 absolute left-0 hidden group-hover:block z-50 bg-white p-2">
              {options.map(({ name, id, link }) => {
                return (
                  <Link
                    to={link}
                    key={id}
                    className="block p-2 hover:underline capitalize"
                    onClick={() => {
                      setActiveCategory(name);
                      setShowCategoryOptions(false);
                    }}
                  >
                    {name}
                  </Link>
                );
              })}
            </section>
          )}
        </span>
      </section>
      <Outlet />
    </div>
  );
};

export default ProductSection;
