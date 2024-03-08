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
    <div className="z-30 font-inter">
      <Hero />
      <FeaturedProducts />
      <div className="">
        <Services />
      </div>
      <Contacts />
    </div>
  );
};

export default HomePage;

// bg-yellow-100 font-ntr mt-32 py-40 relative
