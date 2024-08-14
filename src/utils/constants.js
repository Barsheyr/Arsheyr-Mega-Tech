import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";

import bestseller1 from "../assets/bestseller-1.jpg";
import bestseller2 from "../assets/bestseller-2.png";
import bestseller3 from "../assets/bestseller-3.jpg";
import bestseller4 from "../assets/bestseller-4.jpg";
import bestseller5 from "../assets/bestselller5.jpg";
import bestseller6 from "../assets/bestseller6.jpg";
import bestseller7 from "../assets/bestseller7.jpg";
import bestseller8 from "../assets/bestseller8.jpg";
import bestseller10 from "../assets/bestseller10.jpg";
import bestseller11 from "../assets/bestseller11.jpg";
import bestseller12 from "../assets/bestseller12.jpg";
import bestseller13 from "../assets/bestseller13.jpg";
import bestseller15 from "../assets/bestseller15.jpg";
import bestseller16 from "../assets/betseller16.jpg";

export const links = [
  // {
  //   id: 1,
  //   text: "home",
  //   url: "/",
  // },
  {
    id: 1,
    text: "products",
    url: "/productpage",
  },
];

export const bestsellerz = [
  {
    id: 1,
    img: bestseller8,
    name: "Gevril Men's Watch",
    price: "$620.00",
  },
  {
    id: 2,
    img: bestseller5,
    name: "Favre-Leube Men's Watch",
    price: "$589.00",
  },
  {
    id: 3,
    img: bestseller12,
    name: "Fendi Women's Watch",
    price: "$1699.00",
  },
  {
    id: 1,
    img: bestseller13,
    name: "Hamilton Men's Watch",
    price: "$579.00",
  },
  {
    id: 1,
    img: bestseller10,
    name: "Raymond Weil Unisex Watch",
    price: "$579.00",
  },
  {
    id: 1,
    img: bestseller11,
    name: "Raymond Weil Unisex Watch",
    price: "$579.00",
  },
  {
    id: 1,
    img: bestseller15,
    name: "Raymond Weil Unisex Watch",
    price: "$579.00",
  },
  {
    id: 1,
    img: bestseller16,
    name: "Raymond Weil Unisex Watch",
    price: "$579.00",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    // icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    // icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    // icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    // icon: linkedin,
    link: "https://www.linkedin.com/",
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
      subtitle:
        "Samsung, a global leader, partners with us for innovative solutions.",
      delay: 200,
    },
    {
      // icon: <FaApple />,
      title: "Apple",
      subtitle:
        "Innovators in tech, partners in progress, driving future together.",
      delay: 400,
    },
    {
      // icon: CardIconImg3,
      title: "Huawei",
      subtitle:
        "We collaborate closely with Huawei, innovating together to revolutionize technology.",
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
