import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import HomeIcon from "@mui/icons-material/Home";

const Hamburger = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      className="flex flex-col  p-1 space-y-1 cursor-pointer"
      onClick={() => setShowMenu(!showMenu)}
    >
      {!showMenu ? (
        <>
          <span className="inline-block border-2 border-black h-0.5 w-6 bg-black"></span>
          <span className="inline-block border-2 border-black h-0.5 w-6 bg-black"></span>
          <span className="inline-block border-2 border-black h-0.5 w-6 bg-black"></span>
        </>
      ) : (
        <>
          <ArrowBackIcon />
          <section className="h-[100vh] w-3/4 bg-gray-100 absolute top-14 left-0">
            <section className="border-2 m-2 h-[100%] flex text-center flex-col space-y-2">
              <Link to={"/"} className="hover:underline flex justify-center items-center space-x-2">
                <HomeIcon fontSize="small" />
                <span>Home</span>
              </Link>
              <Link to={"/products"} className="hover:underline flex justify-center items-center space-x-2">
                <ShoppingBagIcon fontSize="small" /> <span>Products</span>
              </Link>
            </section>
          </section>
        </>
      )}
    </div>
  );
};

export default Hamburger;
