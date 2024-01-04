import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import Account from "../Account/Account";
import Cart from "../Cart/Cart";
import Hamburger from "../../icons/Hamburger";

export const Header = () => {
  return (
    <nav className="min-w-[100%] h-[60px] flex justify-between items-center border-b-2 bg-blue-100 text-xl
    sticky top-0 z-50">
      <span className="flex items-center space-x-2">
        <span className="sm:hidden ml-2">
          <Hamburger />
        </span>
        <span>Logo</span>
      </span>

      <span className="space-x-4 hidden sm:block">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `${isActive ? "text-[#128a98] border-b-2 border-b-[#128a98]" : "text-black"} capitalize hover:border-b-2  hover:border-b-[#128a98]`
          }
        >
          home
        </NavLink>
        <NavLink
          to={"/products"}
          className={({ isActive }) =>
            `${isActive ? "text-[#128a98] border-b-2 border-b-[#128a98]" : "text-black"} capitalize hover:border-b-2  hover:border-b-[#128a98]`
          }
        >
          Products
        </NavLink>
        
      </span>

      <span className="mr-2">
        <ul className="flex ">
          <li className="p-1 ">
            <SearchIcon fontSize="large"/>
          </li>
          <li className="p-1 ">
            <Cart />
          </li>
          <li className="p-1 ">
            <Account />
          </li>
            
          </ul>
      </span>
    </nav>
  );
};
