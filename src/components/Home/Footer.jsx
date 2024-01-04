import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-[#053132] text-white flex flex-wrap lg:flex-start mt-10  w-full">
      <div className="m-10">
        <ul className="capitalize">
          <li className="pt-2 font-bold text-lg">information</li>
          <li className="pt-2">About us</li>
          <li className="pt-2">delivery information</li>
          <li className="pt-2">privacy policy</li>
          <li className="pt-2">terms & conditions</li>
          <li className="pt-2">help</li>
          <li className="pt-2">contact us</li>
        </ul>
      </div>
      <div className="m-10">
        <ul className="capitalize">
          <li className="pt-2 font-bold text-lg">quick links</li>
          <li className="pt-2">shop</li>
          <li className="pt-2">product</li>
          <li className="pt-2">page</li>
          <li className="pt-2">cart</li>
        </ul>
      </div>
      <div className="m-10">
        <ul className="capitalize">
          <li className="pt-2 font-bold text-lg">support</li>
          <li className="pt-2">Lorem ipsum dolor sit amet.</li>
          <li className="pt-2">email:onlineshoppingkaro@gmail.com</li>
          <li className="pt-2">phone:658-789-5551</li>
        </ul>
      </div>
      <div className="m-10">
        <ul className="capitalize">
          <li className="pt-2 font-bold text-lg">sign up for our newsletter</li>
          <li className="pt-2">
            be the first to know about our special offers,news and updates
          </li>
          <li className="pt-4">
            <input type="text" disabled  className="w-full text-[#053132] p-2 cursor-not-allowed  rounded-sm" placeholder="Email-Address" />
          </li>
        </ul>
      </div>
    </footer>
  );
};
