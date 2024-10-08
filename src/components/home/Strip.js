import React from "react";

const Strip = () => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-evenly items-center gap-y-5 sm:gap-10 my-5 sm:my-10 py-4">
      <div className="p-4 flex flex-col items-center gap-y-3">
        <p className="text-4xl lg:text-6xl font-bold">10+</p>
        <p className="text-xl font-semibold">Years Experience</p>
      </div>
      <div className="p-4 flex flex-col items-center gap-y-3">
        <p className="text-4xl lg:text-6xl font-bold">250+</p>
        <p className="text-xl font-semibold">Projects Completed</p>
      </div>
      <div className="p-4 flex flex-col items-center gap-y-3">
        <p className="text-4xl lg:text-6xl font-bold">11+</p>
        <p className="text-xl font-semibold">Awards & Mentions</p>
      </div>
      <div className="p-4 flex flex-col items-center gap-y-3">
        <p className="text-4xl lg:text-6xl font-bold">6+</p>
        <p className="text-xl font-semibold">Country</p>
      </div>
    </div>
  );
};

export default Strip;
