import React from "react";
import LOGO from "../assets/images/company-logo.png";
import { RiMessage2Fill } from "react-icons/ri";
import { RiContactsBook3Fill } from "react-icons/ri";
import { FaHouse } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#333333] text-white py-10 px-10 lg:px-20 flex flex-col md:flex-row md:justify-evenly items-center gap-y-10 ">
      <div className="w-2/3 md:w-2/5 flex justify-evenly items-center gap-5">
        <div className="rounded-full overflow-hidden">
          <img
            src={LOGO}
            className="w-20 hover:scale-125 transition ease-out duration-300 cursor-pointer"
            alt="company-logo"
          />
        </div>
        <p>Copyright 2024 - TOD | Privacy Policy</p>
      </div>
      <div className="w-2/3 md:w-2/5">
        <div className="my-1 flex items-center gap-2">
          <RiMessage2Fill className="text-2xl md:text-xl " />
          <p>kulveer@toddesign.in | studio@toddesign.in</p>
        </div>
        <div className="my-1 flex items-center gap-2">
          <RiContactsBook3Fill className="text-2xl md:text-xl " />
          <p>+91-011-26501923 | +91 8178553153</p>
        </div>
        <div className="my-1 flex items-center gap-2">
          <FaHouse className="text-2xl md:text-xl " />
          <p>3/1, Club Drive Road, Ghitorni,New Delhi 110030</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
