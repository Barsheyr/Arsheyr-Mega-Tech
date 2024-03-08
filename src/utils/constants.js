import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";

export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const productcard = {
  title: "The Brands we work with.",
  subtitle:
    "With their innovative products and expertise, we are able to deliver high-quality services and meet the evolving needs of our customers.",
  cards: [
    {
      icon: "Fa-Apple",
      title: "Samsung",
      subtitle: "Elit esse cillum dolore eu fugiat nulla pariatur",
      delay: 200,
    },
    {
      // icon: <FaApple />,
      title: "Apple",
      subtitle: "Elit esse cillum dolore eu fugiat nulla pariatur",
      delay: 400,
    },
    {
      // icon: CardIconImg3,
      title: "Huawei",
      subtitle: "Elit esse cillum dolore eu fugiat nulla pariatur",
      delay: 600,
    },
  ],
};

export const services = [
  {
    id: 1,
    // icon: <GiCompass />,
    title: "mission",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    // icon: <GiDiamondHard />,
    title: "vision",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    // icon: <GiStabbedNote />,
    title: "history",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];

// export const products_url = "https://course-api.com/react-store-products";
export const products_url = "/.netlify/functions/products";

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`;

export const single_product_url = `/.netlify/functions/single-product?id=`;
