import React from "react";
import IMG from "../../assets/images/our-studio/img.jpg";
import IMG1 from "../../assets/images/our-studio/img1.jpg";
import IMG2 from "../../assets/images/our-studio/img2.jpg";
import IMG3 from "../../assets/images/our-studio/img3.jpg";
import IMG4 from "../../assets/images/our-studio/img4.jpg";
import { Link } from "react-router-dom";

const OurStudio = () => {
  return (
    <div className="bg-[#333333] text-white py-10 px-10 lg:px-20">
      <h2 className="text-3xl font-bold ml-2 my-4 tracking-wide">OUR STUDIO</h2>
      <div className="border-b-2 border-b-[#FFBF00] mb-10 w-80 ml-4 "></div>
      <div className="md:flex justify-center items-center">
        <div className="md:w-1/3 m-1">
          <img
            src={IMG}
            className="w-full hover:scale-110 transition ease-out duration-300 cursor-pointer"
            alt=""
          />
        </div>
        <div className="md:w-1/3 m-1">
          <img
            src={IMG1}
            className="w-full mb-1 hover:scale-110 transition ease-out duration-300 cursor-pointer"
            alt=""
          />
          <img
            src={IMG2}
            className="w-full mt-2 hover:scale-110 transition ease-out duration-300 cursor-pointer"
            alt=""
          />
        </div>
        <div className="md:w-1/3 m-1">
          <img
            src={IMG3}
            className="w-full mb-1 hover:scale-110 transition ease-out duration-300 cursor-pointer"
            alt=""
          />
          <img
            src={IMG4}
            className="w-full mt-2 hover:scale-110 transition ease-out duration-300 cursor-pointer"
            alt=""
          />
        </div>
      </div>
      <button className="border-[1px]  border-white text-white m-4 py-2 px-4 mt-8">
        {" "}
        <Link to="/about">KNOW MORE</Link>
      </button>
    </div>
  );
};

export default OurStudio;
