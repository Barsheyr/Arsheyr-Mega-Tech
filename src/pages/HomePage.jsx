import React from "react";
import {
  Hero,
  FeaturedProducts,
  Footer,
  Services,
  Contacts,
} from "../components";

const HomePage = () => {
  return (
    <div className=" z-30">
      <Hero />
      <FeaturedProducts />
      <div>
        <Services />
      </div>
      <Contacts />
    </div>
  );
};

export default HomePage;
