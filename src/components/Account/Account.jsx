import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink } from "react-router-dom";

const Account = () => {
  const [showAccount, setShowAccount] = useState(false);
  return (
    <div
      className="hover:cursor-pointer relative"
      onClick={()=>setShowAccount(!showAccount)}
    >
      <AccountCircleIcon fontSize="large" />
      <div
        className={`border-[1px] border-black rounded-md  p-2 absolute -right-1 top-9 ${
          showAccount ? "flex" : "hidden"
        } z-50  flex-col p-2 bg-white`}
      >
        <NavLink
          to={"/register"}
          className="capitalize text-center mt-2 mb-2 ml-1 mr-1 pt-1 pb-1 pr-3 pl-3 border-2 border-blue-300 rounded-lg text-blue-700 hover:text-white hover:bg-blue-300"
        >
          register
        </NavLink>
        <span className="text-center">or</span>
        <NavLink
          to={"/login"}
          className="capitalize mt-2 mb-2 ml-1 mr-1 pt-1 pb-1 pr-3 pl-3 bg-gray-800 rounded-md text-white text-center hover:text-black hover:bg-white border-black border-2"
        >
          login
        </NavLink>

        <span className="border-[1px] border-black absolute right-2 -top-2.5 p-2 rotate-45 border-r-0 border-b-0 z-10 bg-white" />
      </div>
    </div>
  );
};

export default Account;
