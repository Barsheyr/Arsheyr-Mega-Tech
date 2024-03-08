import React from "react";
import { Header, Footer, Loading } from "../components";
import { Outlet, useNavigation } from "react-router-dom";

const Landing = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section>
          <Outlet />
        </section>
      )}

      <Footer />
    </>
  );
};

export default Landing;
