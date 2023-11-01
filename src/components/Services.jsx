import React from "react";
import { services } from "../utils/constants";

import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";

const servicess = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];

const Services = () => {
  return (
    <main className="bg-yellow-300 font-Tiltnoon mt-32 py-40 relative">
      <div className="max-w-5xl mx-auto  ">
        <article className="grid lg:grid-cols-2 px-20 -mt-20">
          <h3 className="text-4xl font-Tiltnoon font-bold tracking-widest">
            Custom furniture <br /> built only for you
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </article>
        <div className="grid lg:grid-cols-3 gap-5 max-w-5xl mx-auto mt-20 lg:absolute ">
          {servicess.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article
                className="text-center bg-yellow-500 py-20 lg:mx-0 mx-10 px-5 rounded-md"
                key={id}
              >
                <span className="icon">{icon}</span>
                <h4 className="text-2xl uppercase font-bold">{title}</h4>
                <p className="tracking-widest mt-5">{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Services;
