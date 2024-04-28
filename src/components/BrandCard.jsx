import React, { useState } from "react";

import { productcard } from "../utils/constants";
import { FaApple } from "react-icons/fa";
import { SiSamsung, SiHuawei } from "react-icons/si";

const BrandCard = () => {
  const [index, setIndex] = useState(1);
  const { cards } = productcard;

  return (
    <section className="">
      <div className="flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[30px]">
        {cards.map((card, cardsIndex) => {
          const { icon, title, subtitle, delay } = card;
          return (
            <div
              key={cardsIndex}
              data-aos="zoom-out"
              data-aos-offset="300"
              data-aos-delay="delay"
            >
              <div
                onClick={() => setIndex(cardsIndex)}
                className={`${
                  index === cardsIndex && "bg-blue-100 shadow-2xl"
                } w-[350px] h-[350px] flex flex-col justify-center items-center mx-auto p-[65px] text-center rounded-[12px] cursor-pointer transition-all`}
              >
                <div className="mb-6">
                  <img src={icon} alt="" />
                </div>

                <div className="mb-3 text-xl font-bold"> {title} </div>
                <p className="text-base"> {subtitle} </p>
                {index === cardsIndex && <img src="" />}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BrandCard;
