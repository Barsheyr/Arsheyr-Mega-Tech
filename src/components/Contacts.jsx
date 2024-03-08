import React from "react";
import { productcard } from "../utils/constants";
import BrandCard from "./BrandCard";

const Contacts = () => {
  const { title, subtitle } = productcard;
  return (
    <section className="py-8 lg:py-[142px] px-10 lg:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center lg:flex-row mb-10 lg:mb-20">
          <h2
            className="text-6xl lg:text-8xl mb-6 font-bold"
            data-aos="fade-up"
            data-aos-offset="400"
            data-aos-delay="300"
          >
            {title}
          </h2>
          <p
            className="text-2xl text-light font-normal mb-6 lg:max-w-[350px]"
            data-aos="fade-up"
            data-aos-offset="400"
            data-aos-delay="300"
          >
            {subtitle}
          </p>
        </div>

        <BrandCard />
      </div>
    </section>
  );
};

export default Contacts;
