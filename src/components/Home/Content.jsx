import React from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import womanImage from "../../assets/images/woman.png";
import { NavLink } from "react-router-dom";

export const Content = () => {
  return (
    <section className="border-black sm:flex relative">
      <section className="border-2 w-full sm:w-2/3 bg-[#cef4fd]">
        <section className="ml-6 w-[80%] h-full ">
          <h1 className="font-bold text-3xl mt-32">
            Discover & Shop <br /> The Trend
          </h1>
          <p className="mt-5 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            rerum laboriosam vitae temporibus qui nulla, unde magni, iste
            adipisci totam aspernatur nemo obcaecati eos ut illum beatae nobis
            voluptate dolorem.
          </p>

          <div className="mt-8 mb-8 ">
            <NavLink
              to={"/products"}
              className="bg-[#0b5e66] text-white relative p-2 pl-4 pr-10 capitalize rounded-lg hover:bg-white hover:text-[#0b5e66] hover:border-[#0b5e66] border-[1px] "
            >
              shop now
              <ArrowCircleRightIcon className="absolute right-2 top-2" />
            </NavLink>
          </div>
        </section>
      </section>
      <section className="bg-[#128a98] z-0 relative sm:w-1/3 ">
        <figure className="sm:absolute sm:-left-20 sm:-bottom-2 inline aspect-square sm:max-h-80 bottom-0 left-0 relative">
          <img src={womanImage} alt="" />
        </figure>
      </section>
    </section>
  );
};
