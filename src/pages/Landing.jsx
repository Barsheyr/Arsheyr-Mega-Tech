import React from "react";
import { Header, Footer } from "../components";
import { Outlet } from "react-router-dom";

const Landing = () => {
  return (
    <div className="">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Landing;
