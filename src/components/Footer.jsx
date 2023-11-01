import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white flex items-center flex-col lg:flex-row justify-center gap-10 py-10 mt-20 lg:mt-5 px-28 font-Tiltnoon">
      <h5>
        &copy; {new Date().getFullYear()}
        <span className="text-yellow-300"> Arsheyr Bzade </span>
      </h5>
      <h5>All rights reserved</h5>
    </div>
  );
};

export default Footer;
