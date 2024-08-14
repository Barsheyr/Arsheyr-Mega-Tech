import React from "react";
import {
  Hero,
  FeaturedProducts,
  Footer,
  Services,
  Contacts,
  Features,
  Newsletter,
  Bestsellers,
} from "../components";

const HomePage = () => {
  return (
    <div className="z-30">
      <Hero />
      <FeaturedProducts />
      <div className="">{/* <Services /> */}</div>
      <Bestsellers />
      <Contacts />
      <Newsletter />
      <Features />
    </div>
  );
};

export default HomePage;

// bg-yellow-100 font-ntr mt-32 py-40 relative
