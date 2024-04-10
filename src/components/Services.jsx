import React from "react";
import { services } from "../utils/constants";

import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { VscArrowSwap } from "react-icons/vsc";
import { BsCart4 } from "react-icons/bs";

const servicess = [
  {
    id: 1,
    icon: <BiPurchaseTagAlt size={50} />,
    title: "BUY",
    text: "Discover quality products, unbeatable prices, and exceptional service. Shop with us today for a seamless shopping experience!",
  },
  {
    id: 2,
    icon: <BsCart4 size={50} />,
    title: "SELL",
    text: "We offer cutting-edge tech solutions tailored to your needs, ensuring efficiency, innovation, and seamless integration for ultimate customer satisfaction.",
  },
  {
    id: 3,
    icon: <VscArrowSwap size={50} />,
    title: "SWAP",
    text: "Swap deals offer customers US products for their goods/services, fostering exchange and enhancing market access and diversity.",
  },
];

const Services = () => {
  return (
    <main className="mt-20 py-20 lg:h-[100vh] relative">
      <div className="w-full">
        <span class="absolute w-full h-[100vh] lg:h-[50%] top-20 bg-blue-100 -z-[1]"></span>
        <article className="grid lg:grid-cols-2 max-w-6xl mx-auto space-y-5 px-10 lg:px-0">
          <h3 className="text-5xl font-bold mt-10">
            Find your tech <br /> built only for you
          </h3>
          <p className="text-lg">
            Introducing the latest innovation tailored just for you: our
            cutting-edge products optimizes your experience seamlessly, ensuring
            unparalleled convenience and efficiency at every interaction.
            Elevate your journey with our personalized tech solution, designed
            to anticipate and exceed your needs with precision and care.
          </p>
        </article>

        <div className="grid lg:grid-cols-3 mt-20 gap-5 lg:top-10 lg:px-40 px-10">
          {servicess.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article
                className="bg-blue-50 mx-auto max-w-6xl flex flex-col items-center py-10 px-10 space-y-5 text-center rounded-lg"
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

    // <div>
    //   <div class="w-full px-5 relative">
    //     {/* <span class="absolute top-0 left-0 w-full h-4/5 lg:h-3/4 bg-orange-500 -z-[1]"></span> */}
    //     <section class="max-w-6xl py-20 mx-auto">
    //       <div class="flex items-start lg:items-center justify-between flex-wrap gap-y-5 md:gap-x-10 mb-12 md:mb-16 lg:mb-24">
    //         <h2 class="text-3xl font-bold tracking-wide text-amber-700 md:flex-none">
    //           Custom Furniture <br class="hidden md:inline-block" />
    //           Built Only For You
    //         </h2>

    //         <p class="max-w-[600px] leading-7 text-amber-700">
    //           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
    //           magni tempora nobis consequuntur voluptatem atque debitis
    //           blanditiis amet repellendus tenetur
    //         </p>
    //       </div>

    //       <article class="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5">
    //         <div class="bg-amber-500 px-5 py-6 flex flex-col items-center">
    //           <span class="w-12 aspect-square bg-white rounded-full mb-2.5"></span>
    //           <p class="text-amber-800 text-xl font-bold">Mission</p>
    //           <p class="text-center">
    //             Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //             Distinctio beatae natus illum, eaque vero sunt corporis vel,
    //             minus quasi doloremque veritatis corrupti consectetur, quas
    //             perspiciatis?
    //           </p>
    //         </div>
    //         <div class="bg-amber-500 px-5 py-6 flex flex-col items-center">
    //           <span class="w-12 aspect-square bg-white rounded-full mb-2.5"></span>
    //           <p class="text-amber-800 text-xl font-bold">Vision</p>
    //           <p class="text-center">
    //             Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //             Distinctio beatae natus illum, eaque vero sunt corporis vel,
    //             minus quasi doloremque veritatis corrupti consectetur, quas
    //             perspiciatis?
    //           </p>
    //         </div>
    //         <div class="bg-amber-500 px-5 py-8 flex flex-col items-center">
    //           <span class="w-12 aspect-square bg-white rounded-full mb-2.5"></span>
    //           <p class="text-amber-800 text-xl font-bold">History</p>
    //           <p class="text-center">
    //             Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //             Distinctio beatae natus illum, eaque vero sunt corporis vel,
    //             minus quasi doloremque veritatis corrupti consectetur, quas
    //             perspiciatis?
    //           </p>
    //         </div>
    //       </article>
    //     </section>
    //   </div>
    // </div>
  );
};

export default Services;
