import React from "react";

const AboutCompany = () => {
  return (
    <div className=" py-10 px-10 lg:px-20">
      <h2 className="text-3xl font-bold ml-2 my-4 tracking-wide">ABOUT US</h2>
      <div className="border-b-2 border-b-[#FFBF00] mb-10 w-80 ml-4 "></div>
      <div>
        <p className="text-sm my-4">
          As a studio we specialize in multidisciplinary design domains like
          retail design, exhibition design, furniture design, interior design,
          and graphic design with a focus on user experience. Our strength lies
          in thinking, designing, planning and building new experiences.
        </p>
        <h3 className="text-lg font-semibold tracking-wider">RESEARCH</h3>
        <p className="text-sm my-4">
          We are a young firm that believes that research must inform all our
          design decisions and thus, we always start each design project with
          our classic brainstorming sessions in studio. These discussions also,
          help us to plan in advance how to achieve the given target in a given
          time frame and with the available local resources.
        </p>
        <h3 className="text-lg font-semibold tracking-wider">CONCEPT</h3>
        <p className="text-sm my-4">
          We believe that good design must be holistic in nature and should plan
          for all scenarios. We also understand that design must create
          connection, and thus all our design solutions are always narrative
          centric, for if more and more people identify with our concept story,
          they will be able to experience the space as we planned and designed
          for it.
        </p>
      </div>
    </div>
  );
};

export default AboutCompany;
