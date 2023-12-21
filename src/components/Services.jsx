import React from "react";
import { services } from "../utils/constants";

import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";

const servicess = [
  {
    id: 1,
    icon: <GiCompass size={50} />,
    title: "BUY",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <GiDiamondHard size={50} />,
    title: "SELL",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: <GiStabbedNote size={50} />,
    title: "SWAP",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];

const Services = () => {
  return (
    <main className=" bg-yellow-50 mt-20 lg:h-[50vh] relative">
      <div className="">
        <article className="grid lg:grid-cols-2 lg:px-32 px-10 space-y-5">
          <h3 className="text-5xl">
            Find your tech <br /> built only for you
          </h3>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </article>

        <div className="grid lg:grid-cols-3 mt-20 gap-5 lg:absolute lg:top-20 lg:px-40 px-10">
          {servicess.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article
                className="bg-yellow-100 mx-auto max-w-6xl flex flex-col items-center py-10 px-10 space-y-5 text-center rounded-md"
                key={id}
              >
                <span className="icon">{icon}</span>
                <h4 className="text-xl uppercase font-bold">{title}</h4>
                <p className="tracking-widest mt-5 text-lg">{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Services;
