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

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
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
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
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
