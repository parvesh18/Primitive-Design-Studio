import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-center gap-10 my-20">
      <div className="w-2/3 lg:w-2/5 ">
        <h2 className="text-2xl font-bold ml-2 my-4 tracking-wide">CONTACT</h2>
        <div className="border-b-2 border-b-[#FFBF00] mb-10 w-60 ml-4 "></div>
        <p className="text-xl leading-7 tracking-wide">
          We’re always happy to meet face to face or start a conversation
          online.
        </p>
      </div>
      <div className="w-2/3 lg:w-2/5">
        <div className="flex gap-2">
          <input
            type="text"
            className="focus:outline-blue-500 border-[1px] border-[#a6a5a5] px-3 py-1 w-1/3"
            placeholder="Name"
          />
          <input
            type="text"
            className="focus:outline-blue-500 border-[1px] border-[#a6a5a5] px-3 py-1 w-1/3"
            placeholder="Number"
          />
          <input
            type="text"
            className="focus:outline-blue-500 border-[1px] border-[#a6a5a5] px-3 py-1 w-1/3"
            placeholder="Email"
          />
        </div>
        <div className="mt-2">
          <textarea
            name=""
            className="focus:outline-blue-500 border-[1px] mt-3 border-[#a6a5a5] px-3 py-1 w-full"
            id=""
            placeholder="Your Message"
          ></textarea>
        </div>
        <button className="border-[1px]  border-[#a6a5a5] text-black my-4 py-2 px-10 hover:text-[#797878]">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
