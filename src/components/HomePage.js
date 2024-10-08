import React from "react";
import {
  Carousel,
  CarouselText,
  Strip,
  HiThere,
  AboutCompany,
  OurStudio,
  ContactUs,
} from "./home";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <CarouselText />
      <Strip />
      <HiThere />
      <AboutCompany />
      <OurStudio />
      <ContactUs />
    </div>
  );
};

export default HomePage;
