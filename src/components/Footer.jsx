import React from "react";
import { footerLinks } from "../utils/constants";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export const socialMedia = [
  {
    id: "social-media-1",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: <FaTwitter />,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/",
  },
];

const Footer = () => {
  return (
    <main className="bg-black text-white">
      <section className="max-w-7xl mx-auto px-10 flex justify-center items-center sm:py-16 py-6">
        <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full">
          <div className="flex-[1] flex flex-col justify-start mr-10">
            <p className="font-normal lg:text-3xl text-xl  mt-4">
              Arsheyr Gadgets
            </p>
          </div>

          <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
            {footerLinks.map((footerlink) => (
              <div key={footerlink.title} className={`flex flex-col my-4`}>
                <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                  {footerlink.title}
                </h4>

                <ul className="list-none mt-4">
                  {footerlink.links.map((link, index) => (
                    <li
                      key={link.name}
                      // className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      //   index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                      // }`}
                    >
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
          <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
            Copyright Ⓒ 2022 Arsheyr Store. All Rights Reserved.
          </p>

          <div className="flex flex-row gap-3 md:mt-0 mt-6">
            {socialMedia.map((social, index) => (
              <div>{social.icon}</div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Footer;
